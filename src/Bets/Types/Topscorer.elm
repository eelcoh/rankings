module Bets.Types.Topscorer
  ( getTeam
  , setTeam
  , getPlayer
  , setPlayer
  , isComplete
  , decode
  , encode
  ) where

import Json.Encode
import Json.Decode exposing (Decoder, (:=), maybe, tuple2)

import Bets.Json.Encode exposing (mStrEnc)
import Bets.Types exposing (Topscorer, Team, Player)
import Bets.Types.Team

import Maybe.Extra as M

getTeam : Topscorer -> Maybe Team
getTeam ts =
  snd ts

{-
  Sets or toggles the team. As team changes, topscorer player is always cleared.
-}
setTeam : Topscorer -> Team -> Topscorer
setTeam ts team =
  case (getTeam ts) of
    Nothing ->
      (Nothing, Just team)
    Just t ->
      if (t == team)
        then
          (Nothing, Nothing)
        else
          (Nothing, Just team)

getPlayer : Topscorer -> Maybe Player
getPlayer ts =
  fst ts

setPlayer : Topscorer -> Player -> Topscorer
setPlayer (mPlayer, mTeam) player =
  case mPlayer of
    Nothing ->
      (Just player, mTeam) -- we should actually check whether that is possible. Todo.

    Just p ->
      if (p == player)
        then
          (Nothing, mTeam)
        else
          (Just player, mTeam)


topscorer : Maybe String -> Maybe Team -> Topscorer
topscorer mName mTeam =
  (mName, mTeam)

isComplete : Topscorer -> Bool
isComplete (mName, mTeam) =
  (M.isJust mName) && (M.isJust mTeam)


encode : Topscorer -> Json.Encode.Value
encode (mName, mTeam) =
  Json.Encode.object
    [ ("name", mStrEnc mName)
    , ("team", Bets.Types.Team.encodeMaybe mTeam)
    ]

decode : Decoder Topscorer
decode =
  Json.Decode.map
    (\x -> topscorer x.name x.team)
    decodeTSObj

type alias TopscorerObject =
  { name : Maybe String
  , team : Maybe Team
  }

decodeTSObj : Decoder TopscorerObject
decodeTSObj =
  Json.Decode.object2
    TopscorerObject
    ("name" := maybe Json.Decode.string)
    ("team" := maybe Bets.Types.Team.decode)
