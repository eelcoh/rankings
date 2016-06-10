module Bets.Types.Draw (team, isComplete, encode, decode) where

import Bets.Types exposing (DrawID, Draw, Team)
import Bets.Types.Team as T

import Json.Encode
import Json.Decode exposing (Decoder, (:=), maybe, tuple2)

team : Draw -> Maybe Team
team (_, mTeam) =
  mTeam

draw : DrawID -> Maybe Team -> Draw
draw drawId mTeam =
  (drawId, mTeam)

isComplete : Draw -> Bool
isComplete (_, mTeam) =
  T.isComplete mTeam

decode : Decoder Draw
decode =
  tuple2 draw
    Json.Decode.string
    (maybe T.decode)

encode : Draw -> Json.Encode.Value
encode (drawId, mTeam) =

  Json.Encode.list
    [ (Json.Encode.string drawId)
    , (T.encodeMaybe mTeam)
    ]
