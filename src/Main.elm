module Main (..) where

import Effects exposing (Effects, Never)
import StartApp

import Html exposing (Html, div, button, text, textarea, input, section, table, td, tr, th)
-- import Html.Events exposing (onClick, on, targetValue)
import Html.Attributes exposing (id, value, placeholder, class, href)

import Task exposing (Task)
import Http
-- import Date

-- import Json.Encode
import Json.Decode exposing (Decoder, (:=), object2, object4, andThen, maybe)

import Bets.Types exposing (Round(..))

import Utils.Types exposing (roundFromString)

import Dict

type alias Ranking =
  { name : String
  , pos : Int
  , rounds : List (Round, Int)
  , topscorer : Int
  , total : Int
  , uuid : String
  }

type alias Model =
  { rankings : List Ranking
  }

type Action
  = FetchRankings
  | Receive Model
  | Failure Http.Error


update : Action -> Model -> (Model, Effects Action)
update action model =
  case action of
    FetchRankings ->
      fetchRankings model "/app/rankings"

    Receive newModel ->
      (newModel, Effects.none)

    Failure httpError ->
      (model, Effects.none)

app : StartApp.App Model
app =
  StartApp.start
    { init = fetchRankings newModel "/app/rankings"
    , update = update
    , view = view
    , inputs = []
    }


main: Signal Html.Html
main =
  app.html


newModel : Model
newModel =
  {rankings = []}


view : Signal.Address Action -> Model -> Html
view address model =
  let
    rankings =
      List.map (viewRankingLine address) model.rankings
  in
    table [] rankings


viewRankingLine : Signal.Address Action -> Ranking -> Html
viewRankingLine address ranking =
  tr []
    [ td [class "pos"] [text (toString ranking.pos) ]
    , td [class "name"] [text ranking.name]
    , td [class "points"] [text (toString ranking.total) ]
    ]



-- Json

decode : Decoder Model
decode =
  Json.Decode.object1
    Model
    ("rankings" := Json.Decode.list decodeRanking)

decodeRanking : Decoder Ranking
decodeRanking =
  Json.Decode.object6
    Ranking
    ("name" := Json.Decode.string)
    ("pos" := Json.Decode.int)
    ("rounds" := decodeRounds)
    ("topscorer" := Json.Decode.int)
    ("total" := Json.Decode.int)
    ("uuid" := Json.Decode.string)


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
fetchRankings : Model -> String -> (Model, Effects Action)
fetchRankings model urlString =
  let
    request = Task.map
      (\resp -> Receive resp)
      (Http.get decode urlString)

    neverFailingRequest = Task.onError
      request
      (\err -> Task.succeed (Failure err))
  in
    ( model, Effects.task neverFailingRequest )
