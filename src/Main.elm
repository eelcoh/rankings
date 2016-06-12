module Main (..) where

import Effects exposing (Effects, Never)
import StartApp

import Html exposing (Html, div, span, button, text, textarea, input, section, table, td, tr, th)
import Html.Events exposing (onClick)
import Html.Attributes exposing (id, value, placeholder, class, href)

import Task exposing (Task)
import Http
-- import Date

-- import Json.Encode
import Json.Decode exposing (Decoder, (:=), object2, object4, andThen, maybe)

import Bets.Types exposing (Round(..), Answer, AnswerT(..), Team)
import Bets.Types.Match as M
import Bets.Types.Score as S
import Bets.Types.Team as T

import Utils.Types exposing (roundFromString)

import Dict
import String
import List.Extra exposing (groupBy)

import Bets.Bet

type alias UUID = String

type alias RankingSummary =
  { name : String
  , pos : Int
  , rounds : List (Round, Int)
  , topscorer : Int
  , total : Int
  , uuid : String
  }

type alias Rankings =
  { rankings : List RankingSummary }

type alias Ranking =
  { name : String
  , pos : Int
  , rounds : List (Round, Int)
  , topscorer : Int
  , total : Int
  , uuid : String
  , bet : Bets.Types.Bet
  }

type alias Model =
  { rankings : List RankingSummary
  , current : Maybe Ranking
  , err : Maybe Http.Error
  }

type Action
  = FetchRankingSummary
  | Receive Rankings
  | Failure Http.Error
  | SetCurrent UUID
  | RankingReceived Ranking
  | BackToRankings


update : Action -> Model -> (Model, Effects Action)
update action model =
  case action of
    FetchRankingSummary ->
      fetchRankingSummary model "/app/rankings"

    Receive rs ->
      ({model | rankings = rs.rankings}, Effects.none)

    Failure httpError ->
      let
        err = Debug.log "err" httpError
      in
        ({model | err = Just err}, Effects.none)

    SetCurrent uuid ->
      fetchRanking model ("/app/rankings/" ++ uuid)

    RankingReceived r ->
      ({model | current = Just (Debug.log "r" r)}, Effects.none)

    BackToRankings ->
      ({model | current = Nothing}, Effects.none)

app : StartApp.App Model
app =
  StartApp.start
    { init = (fetchRankingSummary newModel "/app/rankings")
    , update = update
    , view = view
    , inputs = []
    }


main: Signal Html.Html
main =
  app.html


port tasks : Signal (Task.Task Never ())
port tasks =
  app.tasks

newModel : Model
newModel =
  { rankings = []
  , current = Nothing
  , err = Nothing
  }


view : Signal.Address Action -> Model -> Html
view address model =
  case model.current of
    Nothing ->
      viewOverview address model.rankings
    Just r ->
      viewRanking address r

viewOverview : Signal.Address Action -> List RankingSummary -> Html
viewOverview address rs =
  let
    --rankings =
    --  List.map (viewRankingLine address) model.rankings

    rankingsByPoints =
      groupBy (\x y -> .total x == .total y) rs
      |> List.map toPointRankingsTuple
      |> toPositions 1

    toPointRankingsTuple rs =
      case (List.head rs) of
        Just r ->
          (.total r, rs)
        Nothing ->
          (-1, rs)

    toPositions pos prs =
      case prs of
        ((pts, rs)::rest) ->
          let
            nextPos =
              pos + (List.length rs)
          in
            (pos, (pts, rs))::(toPositions nextPos rest)

        [] ->
          []

    rankingViewByPoints (pos, (pts, rs)) =
      let
        no =
          List.length rs

        nOfPlayers =
          if (no == 1)
            then
              ""
            else
              " (" ++ (toString no) ++ " deelnemers)"

        hdr =
          Html.p []
            [ Html.strong [] [text (toString pos)]
            , text (" (" ++ (toString pts) ++ " " ++ "punten): ")
            , text players
            ]

        players =
          List.map .name rs
          |> String.join ", "

      in
        section []
          [ Html.p [class "point-header"] [ hdr ]
          ]

    rankingsViewsByPoints =
      Html.section [] (List.map rankingViewByPoints rankingsByPoints)

    rankingsViewsByPoints2 =
      Html.table [] (List.map (viewRankingLine address) rankingsByPoints)

    homelink =
      Html.p []
        [ Html.a [ href "/voetbalpool", class "button-like right"] [ text "home"]
        , text " / "
        , Html.span [ class "button-like right clickable", onClick address BackToRankings] [ text "stand"]
        , text " / "
        ]
  in
    div []
      [ homelink
      , Html.h1 [] [text "De stand"]
      , rankingsViewsByPoints2
--      , div [class "button xxxs clickable active", onClick address FetchRankingSummary] [text "verversen"]
      ]


viewRankingLine : Signal.Address Action -> (Int, (Int, List RankingSummary)) -> Html
viewRankingLine address (pos, (pts, rankings)) =
  let
    players =
      List.map mkRanking rankings
      |> List.intersperse (text ", ")

    mkRanking ranking =
      Html.span [class "clickable", onClick address (SetCurrent ranking.uuid)] [text ranking.name]

  in
    tr []
      [ td [class "pos"] [text (toString pos)]
      , td [class "name"] players
      , td [class "points"] [text (toString pts) ]
      ]


-- ranking

viewRanking : Signal.Address Action -> Ranking -> Html
viewRanking address model =
  Html.section []
    [ viewTop address model
    , viewMatches address model
    , viewBracket address model
    , viewTopscorer address model
    ]

viewTop : Signal.Address Action -> Ranking -> Html
viewTop address ranking =
  Html.p []
    [ Html.a [ href "/voetbalpool", class "button-like right"] [ text "home"]
    , text " / "
    , Html.span [ class "button-like right clickable", onClick address BackToRankings] [ text "stand"]
    , text " / "
    , Html.span [ class "button-like right"] [ text ranking.name]
    , text " / "
    ]


viewMatches : Signal.Address Action -> Ranking -> Html
viewMatches address ranking =
  let
    answers =
      List.sortBy fst ranking.bet.answers
  in
    Html.section []
     [ Html.h1 [] [text "Uitslagen"]
     , Html.div [class "container"] (List.filterMap (viewMatch address) answers)
     ]

viewMatch : Signal.Address Action -> Answer -> Maybe Html
viewMatch address (_, answer) =
  case answer of
    AnswerGroupMatch group match mScore points ->
      let
        home =
          M.homeTeam match
          |> viewTeam

        away =
          M.awayTeam match
          |> viewTeam

        cls =
          "cell xxl score container match " ++ clr

        clr =
          case points of
            Nothing ->
              "border-tbd"
            Just 0 ->
              "border-wrong"
            Just 1 ->
              "border-toto"
            Just 3 ->
              "border-score"
            Just _ ->
              "border-perhaps"

        displayScore score =
          let
            hScore =
              Maybe.map toString (S.homeScore score)
              |> Maybe.withDefault "_"
            aScore =
              Maybe.map toString (S.awayScore score)
              |> Maybe.withDefault "_"
          in
            text (hScore ++ "-" ++ aScore)

        scoreTxt =
          case mScore of
            Just s ->
              displayScore s
            Nothing ->
              text "_-_"

        scoreView =
          div [class "cell"] [scoreTxt]

      in
        div [class (cls)]
          [ home
          , scoreView
          , away
          ]
        |> Just
    _ ->
      Nothing

-- AnswerGroupMatch Group Match (Maybe Score) Points
viewBracket : Signal.Address Action -> Ranking -> Html
viewBracket address ranking =
  Html.section []
   [ Html.h1 [] [text "Schema"]
   , Html.div [class "container"] [text "Wordt aan gewerkt"]
   ]

viewTopscorer : Signal.Address Action -> Ranking -> Html
viewTopscorer address ranking =
  Html.section []
   [ Html.h1 [] [text "Topscorer"]
   , Html.div [class "container"] [text "Wordt aan gewerkt"]
   ]


-- Json

decode : Decoder Rankings
decode =
  Json.Decode.object1
    Rankings
    ("rankings" := Json.Decode.list decodeRankingSummary)

decodeRankingSummary : Decoder RankingSummary
decodeRankingSummary =
  Json.Decode.object6
    RankingSummary
    ("name" := Json.Decode.string)
    ("pos" := Json.Decode.int)
    ("rounds" := decodeRounds)
    ("topscorer" := Json.Decode.int)
    ("total" := Json.Decode.int)
    ("uuid" := Json.Decode.string)

decodeRanking : Decoder Ranking
decodeRanking =
  Json.Decode.object7
    Ranking
    ("name" := Json.Decode.string)
    ("pos" := Json.Decode.int)
    ("rounds" := decodeRounds)
    ("topscorer" := Json.Decode.int)
    ("total" := Json.Decode.int)
    ("uuid" := Json.Decode.string)
    ("bet" := Bets.Bet.decodeBet)

decodeRounds : Decoder (List (Round, Int))
decodeRounds =
  let
    toRoundAndInt (rStr, i) =
      (roundFromString rStr, i)

    toRoundAndInts rStrIntList =
      List.map toRoundAndInt rStrIntList
  in
    Json.Decode.dict Json.Decode.int
    |> Json.Decode.map Dict.toList
    |> Json.Decode.map toRoundAndInts


-- http
fetchRankingSummary : Model -> String -> (Model, Effects Action)
fetchRankingSummary model urlString =
  let
    request = Task.map
      (\resp -> Receive resp)
      (Http.get decode urlString)

    neverFailingRequest = Task.onError
      request
      (\err -> Task.succeed (Failure (Debug.log "err" err)))
  in
    ( model, Effects.task neverFailingRequest )


fetchRanking : Model -> String -> (Model, Effects Action)
fetchRanking model urlString =
  let
    request = Task.map
      (\resp -> RankingReceived resp)
      (Http.get decodeRanking urlString)

    neverFailingRequest = Task.onError
      request
      (\err -> Task.succeed (Failure err))
  in
    ( model, Effects.task neverFailingRequest )


-- Utils

viewTeam : Maybe Team -> Html
viewTeam team =
  div [class "team cell"]
    [ span [ class "flag" ] [T.flag team]
    , Html.br [] []
    , span [ class "team-name"] [text (T.mdisplay team)]
    ]
