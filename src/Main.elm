module Main exposing (..)

import Html.App as Html

import Html exposing (Html, div, span, button, text, textarea, input, section, table, td, tr, th)
import Html.Events exposing (onClick)
import Html.Attributes exposing (id, value, placeholder, class, href)

import Task exposing (Task)
import Http

import Json.Decode exposing (Decoder, (:=), object2, object4, andThen, maybe)

import Bets.Types exposing (Bet, Round(..), Answer, AnswerT(..), Team, Bracket(..), HasQualified(..), Topscorer, Points)
import Bets.Types.Match as M
import Bets.Types.Score as S
import Bets.Types.Team as T
import Bets.Types.Bracket as B
import Bets.Bet

import Utils.Types exposing (roundFromString)

import Dict
import String
import List.Extra exposing (groupWhile)

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

type Msg
  = FetchRankingSummary
  | Receive Rankings
  | Failure Http.Error
  | SetCurrent UUID
  | RankingReceived Ranking
  | BackToRankings


update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  case msg of
    FetchRankingSummary ->
      fetchRankingSummary model "/app/rankings"

    Receive rs ->
      ({model | rankings = rs.rankings}, Cmd.none)

    Failure httpError ->
      let
        err = Debug.log "err" httpError
      in
        ({model | err = Just err}, Cmd.none)

    SetCurrent uuid ->
      fetchRanking model ("/app/rankings/" ++ uuid)

    RankingReceived r ->
      ({model | current = Just r}, Cmd.none)

    BackToRankings ->
      ({model | current = Nothing}, Cmd.none)

main : Program Never
main =
  Html.program
    { init = (fetchRankingSummary newModel "/app/rankings")
    , update = update
    , view = view
    , subscriptions = \_ -> Sub.none
    }


newModel : Model
newModel =
  { rankings = []
  , current = Nothing
  , err = Nothing
  }


view : Model -> Html Msg
view model =
  let
    vw =
      case model.current of
        Nothing ->
          viewOverview model.rankings
        Just r ->
          viewRanking r
  in
    Html.div [] [vw]

viewOverview : List RankingSummary -> Html Msg
viewOverview rs =
  let

    rankingsByPoints =
      groupBy .total rs
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
      Html.table [] (List.map viewRankingLine rankingsByPoints)

    homelink =
      Html.p []
        [ Html.a [ href "/voetbalpool", class "button-like right"] [ text "home"]
        , text " / "
        , Html.span [ class "button-like right clickable", onClick BackToRankings] [ text "stand"]
        , text " / "
        ]
  in
    Html.section []
      [ homelink
      , Html.h1 [] [text "De stand"]
      , rankingsViewsByPoints2
      ]


viewRankingLine : (Int, (Int, List RankingSummary)) -> Html Msg
viewRankingLine (pos, (pts, rankings)) =
  let
    players =
      List.map mkRanking rankings
      |> List.intersperse (text ", ")

    mkRanking ranking =
      Html.span [class "clickable", onClick (SetCurrent ranking.uuid)] [text ranking.name]

  in
    tr []
      [ td [class "pos"] [text (toString pos)]
      , td [class "name"] players
      , td [class "points"] [text (toString pts) ]
      ]


-- ranking

viewRanking : Ranking -> Html Msg
viewRanking model =
  Html.section []
    [ viewTop model
    , viewMatches model
    , viewBracket model
    , viewTopscorer model
    ]

viewTop : Ranking -> Html Msg
viewTop ranking =
  Html.p []
    [ Html.a [ href "/voetbalpool", class "button-like right"] [ text "home"]
    , text " / "
    , Html.span [ class "button-like right clickable", onClick BackToRankings] [ text "stand"]
    , text " / "
    , Html.span [ class "button-like right"] [ text ranking.name]
    , text " / "
    ]


viewMatches : Ranking -> Html Msg
viewMatches ranking =
  let
    answers =
      List.sortBy fst ranking.bet.answers
  in
    Html.section []
     [ Html.h1 [] [text "Uitslagen"]
     , Html.div [class "container"] (List.filterMap viewMatch answers)
     ]

viewMatch : Answer -> Maybe (Html Msg)
viewMatch (_, answer) =
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
          div [class "cell score-text"] [scoreTxt]

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
viewBracket : Ranking -> Html Msg
viewBracket ranking =
  let
    mAnswer =
      Bets.Bet.getAnswer ranking.bet "br"
  in
    case mAnswer of
      Just ((answerId, AnswerBracket bracket _) as answer)->
        Html.section []
         [ Html.h1 [] [text "Schema"]
         , viewBracket' ranking.bet bracket
         ]
      _ ->
        Html.section [] [text "O jee, daar ging iets niet helemaal goed..."]



viewBracket' : Bet -> Bracket -> Html Msg
viewBracket' bet bracket =
  {-
    mn37 = MatchNode "m37" None tnra tnrc -- "2016/06/15 15:00" saintetienne (Just "W37")
    mn38 = MatchNode "m38" None tnwb tnt2 -- "2016/06/15 15:00" paris (Just "W38")
    mn39 = MatchNode "m39" None tnwd tnt4 -- "2016/06/15 15:00" lens (Just "W39")
    mn40 = MatchNode "m40" None tnwa tnt1 -- "2016/06/15 15:00" lyon (Just "W40")
    mn41 = MatchNode "m41" None tnwc tnt3 -- "2016/06/15 15:00" lille (Just "W41")
    mn42 = MatchNode "m42" None tnwf tnre -- "2016/06/15 15:00" toulouse (Just "W42")
    mn43 = MatchNode "m43" None tnwe tnrd -- "2016/06/15 15:00" saintdenis (Just "W43")
    mn44 = MatchNode "m44" None tnrb tnrf -- "2016/06/15 15:00" nice (Just "W44")

    mn45 = MatchNode "m45" None mn37 mn39 -- "2016/06/15 15:00" marseille (Just "W45")
    mn46 = MatchNode "m46" None mn38 mn42 --  "2016/06/15 15:00" lille (Just "W46")
    mn47 = MatchNode "m47" None mn41 mn43 -- "2016/06/15 15:00" bordeaux (Just "W47")
    mn48 = MatchNode "m48" None mn40 mn44 -- "2016/06/15 15:00" saintdenis (Just "W48")

    mn49 = MatchNode "m49" None mn45 mn46 -- "2016/06/15 15:00" lyon (Just "W49")
    mn50 = MatchNode "m50" None mn47 mn48 -- "2016/06/15 15:00" marseille (Just "W50")

    mn51 = MatchNode "m51" None mn49 mn50 -- "2016/06/15 15:00" saintdenis Nothing
  -}
  let
    v = viewMatchWinner bet

    final = B.get bracket "m51"

    m51 = v <| B.get bracket "m51"
    m50 = v <| B.get bracket "m50"
    m49 = v <| B.get bracket "m49"
    m48 = v <| B.get bracket "m48"
    m47 = v <| B.get bracket "m47"
    m46 = v <| B.get bracket "m46"
    m45 = v <| B.get bracket "m45"
    m44 = v <| B.get bracket "m44"
    m43 = v <| B.get bracket "m43"
    m42 = v <| B.get bracket "m42"
    m41 = v <| B.get bracket "m41"
    m40 = v <| B.get bracket "m40"
    m39 = v <| B.get bracket "m39"
    m38 = v <| B.get bracket "m38"
    m37 = v <| B.get bracket "m37"


    champBtn = mkButtonChamp final

    champion =
      Html.div [class "cell2 m irrelevant"]
        [ Html.div [class "container centered"] [champBtn]
        ]

  in
    section [Html.Attributes.id "schema"]
      [ Html.div [class "row justified"] [ m37, m39, m38, m42]
      , Html.div [class "row spaced"]      [ m45, m46]
      , Html.div [class "row spaced"]        [ m49]
      , Html.div [class "row rightside"]     [ m51, champion]
      , Html.div [class "row spaced"]        [ m50]
      , Html.div [class "row spaced"]      [ m47, m48 ]
      , Html.div [class "row justified"] [ m41, m43, m40, m44 ]
      ]



viewMatchWinner : Bet -> Maybe Bracket -> Html Msg
viewMatchWinner bet mBracket =

  case mBracket of

    Just (MatchNode slot winner home away rd _ ) ->
      let

        homeQualified =
          didQualify home

        homeButton =
          mkButton homeQualified home

        awayQualified =
          didQualify away

        awayButton =
          mkButton awayQualified away

        dash =
          text " - "

      in
        Html.div [class "cell2 m irrelevant"]
          [ Html.div [class "container centered"] [homeButton, awayButton]
          ]

    _ ->
      Html.p [] []


mkButton : HasQualified -> Bracket -> Html Msg
mkButton hasQualified bracket =
  let
    clr =
      case hasQualified of
        In ->
          "border-score"
        Out ->
          "border-wrong"
        TBD ->
          "border-tbd"

    cls =
      String.join " " [ "xl", "cell2", "match", clr]

  in

    Html.div [class cls]
      [viewTeam (B.qualifier bracket)]


didQualify : Bracket -> HasQualified
didQualify bracket =
  case bracket of
    MatchNode _ _ _ _ _ hasQualified ->
      hasQualified
    TeamNode _ _ hasQualified ->
      hasQualified


mkButtonChamp : Maybe Bracket -> Html Msg
mkButtonChamp mBracket =
  case mBracket of
    Just br ->
      mkButton (didQualify br) br
    _ ->
      div [] []


-- =====================
-- type alias Topscorer = (Maybe String, Maybe Team)

viewTopscorer : Ranking -> Html Msg
viewTopscorer ranking =
  let
    mAnswer =
      Bets.Bet.getAnswer ranking.bet "ts"
  in
    case mAnswer of
      Just ((answerId, AnswerTopscorer topscorer points) as answer)->
        Html.section []
          [ Html.h1 [] [text "Topscorer"]
          , Html.div [class "container left"]
            [ viewTopscorer' topscorer points ]
          ]
      _ ->
        Html.section [] [text "O jee, daar ging iets niet helemaal goed..."]

viewTopscorer' : Topscorer -> Points -> Html Msg
viewTopscorer' topscorer points =
  case topscorer of
    (Just name, Just team) ->
      div [class "topscorer cell match xxl"]
        [ span [ class "flag" ] [T.flag (Just team)]
        , Html.br [] []
        , span [ class "team-name"] [text name]
        ]
    _ ->
      Html.section [] [text "O jee, daar ging iets niet helemaal goed..."]




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
fetchRankingSummary : Model -> String -> (Model, Cmd Msg)
fetchRankingSummary model url =
  let
    newCmd =
      Task.perform Failure Receive (Http.get decode url)
  in
    (model, newCmd)

fetchRanking : Model -> String -> (Model, Cmd Msg)
fetchRanking model url =
  let
    newCmd =
      Task.perform Failure RankingReceived (Http.get decodeRanking url)
  in
    (model, newCmd)



-- Utils

viewTeam : Maybe Team -> Html Msg
viewTeam team =
  div [class "team cell"]
    [ span [ class "flag" ] [T.flag team]
    , Html.br [] []
    , span [ class "team-name"] [text (T.mdisplay team)]
    ]

groupBy : (a -> comparable) -> List a -> List (List a)
groupBy toComparable =
  groupWhile (\left right -> toComparable left == toComparable right)
