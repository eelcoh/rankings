module Stats exposing (Model, view, update, createStats)

import Types exposing (..)

import Bets.Types exposing (Bet, Round(..), Answer, AnswerT(..), Team, Bracket(..), HasQualified(..), Topscorer, Points)
--import Bets.Types.Round as R

--import Utils.List exposing (groupBy)
import Dict

import Html exposing (Html)

import Chart exposing (vBar, toHtml)

type alias Model =
  Types.RoundStats

type Msg
 = NoOp

update : Msg -> Model -> (Model, Cmd Msg)
update msg model =
  (model, Cmd.none)


view : Model -> Html Msg
view model =
  let
    rounds =
      [2..6]
  in
    Html.section []
      [ Html.div [] [Html.text "..stats.."]
      , Html.section [] (List.map (viewRound' model) rounds)
      ]

viewRound' : Model -> RoundInt -> Html Msg
viewRound' model r =
  case (Dict.get r model) of
    Nothing ->
      Html.div [] [Html.text "Whoops"]
    Just stats ->
      let
        rows =
          Dict.toList stats
          |> List.sortBy fst
          |> List.map viewRow

        tableHeader =
          Html.thead []
            [ Html.th [] [Html.text "Aantal landen goed"]
            , Html.th [] [Html.text "Aantal keer"]
            ]
      in
        Html.table []
          (tableHeader::rows)

viewRow : (Int, Int) -> Html Msg
viewRow (numberOfTeams, numberOfBets) =
  Html.tr []
    [ Html.td [] [Html.text (toString numberOfTeams)]
    , Html.td [] [Html.text (toString numberOfBets)]
    ]

viewRound : Model -> RoundInt -> Html Msg
viewRound model r =
  case (Dict.get r model) of
    Nothing ->
      Html.div [] [Html.text "Whoops"]
    Just stats ->
      let
        lStats =
          Dict.toList stats

        vals =
          List.map (snd >> toFloat) lStats

        labels =
          List.map (fst >> toString) lStats

        rows =
          Dict.toList stats
          |> List.sortBy fst
          |> List.map viewRow

        chart =
          vBar vals labels
          |> Chart.title "This will be the title"
          |> toHtml

      in
        Html.section []
          [ Html.h2 [] [Html.text ("Ronde " ++ (toString r))]
          , chart
          ]







createStats : List RankingSummary -> RoundStats
createStats rss =
  let

    allResults =
      List.map .rounds rss
      |> List.concat
      |> List.map createRoundStat

  in
    List.foldl updateRoundStats Dict.empty allResults
{-
  List RankingSummary        * rss
  -> List List (Round, Int)  * List.map .rounds
  -> List (Round, Int)       * List.concat
  -> List (Round, Int)       * List.map createStat
  -> List (Int, Int)         * List.map (\(r, pts) -> ((R.toInt r), pts))
  -> List (Int, (List Int, Int))
-}
  -- Dict.fold
  -- List.map updateRound d allResults

updateRoundStats : (RoundInt, Int) -> RoundStats -> RoundStats
updateRoundStats (r, amnt) stats =
  let
    rStats =
      case (Dict.get r stats) of
        Nothing ->
          Dict.singleton amnt 1
        Just pStats ->
          updateTeamsRightHistogram amnt pStats
  in
    Dict.insert r rStats stats


updateTeamsRightHistogram : Int -> TeamsRightHistogram -> TeamsRightHistogram
updateTeamsRightHistogram teamsRight teamsRightHistogram =
  case (Dict.get teamsRight teamsRightHistogram) of
    Nothing ->
      Dict.insert teamsRight 1 teamsRightHistogram
    Just val ->
      Dict.insert teamsRight (val + 1) teamsRightHistogram

{-
x : List (RoundInt, Int) -> List (List (RoundInt, (Int, Int)))
x lab =

  List.sortBy fst lab  -- sort on first element  [(r, pts)] -> [(r, pts)]
  |> groupBy fst  -- group by first element [(r, pts)] -> [ [(r, pts)] ]
  |> List.map y

      -- filtered map (remove Nothings, unpack Justs) [ [ [(r, pts)] ] ] -> [ [(r, (pts, num))] ]
    --|> List.concat -- flatten [ [(r, (pts, num))] ] -> [(r, (pts, num))]

y : List (RoundInt, Int) -> List (RoundInt, (Int, Int))
y lab =
  lab                 -- List (RoundInt, Int)
  |> List.sortBy snd  -- List (RoundInt, Int)
  |> groupBy snd      -- List (List (RoundInt, Int))
  |> List.filterMap z  -- List (RoundInt, List (Int, Int))


z : List (a, b) -> Maybe (a, (b, Int))
z lab =
  case lab of
    [] ->
      Nothing
    ((f, s)::rest) ->
      Just (f, (s, List.length lab))
-}
createStat : List (Round, Int) -> List (Int, Int)
createStat rs =
  List.map createRoundStat rs

createRoundStat : (Round, Int) -> (Int, Int)
createRoundStat (r, pts) =
  case r of
    I ->
      (1, pts)
    II ->
      (2, pts)
    III ->
      (3, (pts//4))
    IV ->
      (4, (pts//7))
    V ->
      (5, (pts//10))
    VI ->
      (6, (pts//13))
