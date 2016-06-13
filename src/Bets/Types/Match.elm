module Bets.Types.Match exposing
  ( homeTeam
  , awayTeam
  , teamsInMatch
  , setTeamMatch
  , unsetTeamMatch
  , isComplete
  , encode
  , decode
  ) 

import Json.Encode
import Json.Decode exposing (Decoder)

import Bets.Types exposing (Match, Draw, Team, Stadium)
import Bets.Types.Draw
import Bets.Types.Date
import Bets.Types.Stadium

import Date exposing (Date)


homeTeam : Match -> Maybe Team
homeTeam (d, _, _, _) =
  Bets.Types.Draw.team d

awayTeam : Match -> Maybe Team
awayTeam (_, d, _, _) =
  Bets.Types.Draw.team d

match : Draw -> Draw -> Date -> Stadium -> Match
match home away date stadium =
  (home, away, date, stadium)

{-
  Get the list of teams in a match.
-}
teamsInMatch : Match -> List Team
teamsInMatch ((_, mHome), (_, mAway), _, _) =
  List.filterMap identity [mHome, mAway]

isComplete : Match -> Maybe Team -> Bool
isComplete m mTeam =
  case mTeam of
    Just t ->
      let
        teams = teamsInMatch m
      in
        ((List.length teams) == 2) && (List.member t teams)
    Nothing ->
      False




{-
  Sets the draw (slot) of a match if the drawId is the same.
-}
setTeamMatch : Match -> Draw -> Match
setTeamMatch (home, away, dt, stadium) (drawId, mTeam) =
  let
    updateDraw ((dId, _) as draw) =
      if (dId == drawId)
        then
          (drawId, mTeam)
        else
          draw

    newHome =
      updateDraw home

    newAway =
      updateDraw away

  in
    (newHome, newAway, dt, stadium)


{-
  Takes a match, and a team, and removes the team if it is participant.
  Keeps everything else in tact.
-}
unsetTeamMatch : Match -> Team -> Match
unsetTeamMatch (home, away, dt, stadium) team =
  let
    cleanDraw ((drawId, mTeam) as draw) =
      case mTeam of
        Just t ->
          if team == t
            then
              (drawId, Nothing)
            else
              draw
        _ ->
          draw

    newHome =
      cleanDraw home

    newAway =
      cleanDraw away

  in
    (newHome, newAway, dt, stadium)

encode : Match -> Json.Encode.Value
encode (home, away, dt, stadium) =
  Json.Encode.list
  [ (Bets.Types.Draw.encode home)
  , (Bets.Types.Draw.encode away)
  , (Bets.Types.Date.encode dt)
  , (Bets.Types.Stadium.encode stadium)
  ]

decode : Decoder Match
decode  =
  Json.Decode.tuple4 match
    (Bets.Types.Draw.decode)
    (Bets.Types.Draw.decode)
    (Bets.Types.Date.decode)
    (Bets.Types.Stadium.decode)
