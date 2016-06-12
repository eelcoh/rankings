module Bets.Bet
  ( getAnswer
  , candidates
  , findGroupMatchAnswers
  , findGroupPositionAnswers
  , setWinner
  , setTeam
  , setMatchScore
  , setMatchWinner
  , setParticipant
  , setTopscorer
  , encode
  , decode
  , decodeBet
  ) where

import Bets.Types exposing (..)
import Bets.Types.Answers
import Bets.Types.Candidates


import Json.Encode
import Json.Decode exposing (Decoder, (:=), maybe, fail)
import Bets.Json.Encode exposing (mStrEnc, mIntEnc)


getAnswer : Bet -> AnswerID -> Maybe Answer
getAnswer bet answerId =
  Bets.Types.Answers.getAnswer bet.answers answerId


candidates : Bet -> Answer -> Candidates
candidates bet answer =
  Bets.Types.Candidates.candidates bet.answers answer



findGroupMatchAnswers : Group -> Bet -> Answers
findGroupMatchAnswers group bet =
  Bets.Types.Answers.findGroupMatchAnswers group bet.answers


findGroupPositionAnswers : Group -> Bet -> Answers
findGroupPositionAnswers group bet =
  Bets.Types.Answers.findGroupPositionAnswers group bet.answers


newBet : Bet -> Answers -> Bet
newBet bet newAnswers =
  { bet | answers = newAnswers }


setWinner : Bet -> Answer -> Slot -> Winner -> Bet
setWinner bet answer slot winner =
  Bets.Types.Answers.setWinner bet.answers answer slot winner
  |> newBet bet


setTeam : Bet -> Answer -> Group -> Team -> Bet
setTeam bet answer group team =
  Bets.Types.Answers.setTeam bet.answers answer group team
  |> newBet bet


setMatchScore : Bet -> Answer -> Score -> Bet
setMatchScore bet answer score =
  Bets.Types.Answers.setMatchScore bet.answers answer score
  |> newBet bet


setMatchWinner : Bet -> Answer -> Team -> Bet
setMatchWinner bet answer team =
  Bets.Types.Answers.setMatchWinner bet.answers answer team
  |> newBet bet


setParticipant : Bet -> Answer -> Participant -> Bet
setParticipant bet answer participant =
  Bets.Types.Answers.setParticipant bet.answers answer participant
  |> newBet bet


setTopscorer : Bet -> Answer -> Topscorer -> Bet
setTopscorer bet answer topscorer =
  Bets.Types.Answers.setTopscorer bet.answers answer topscorer
  |> newBet bet


encode: Bet -> Json.Encode.Value
encode bet =
  let
    betObject =
      Json.Encode.object
        [ ("answers", Bets.Types.Answers.encode bet.answers)
        , ("betId", mIntEnc bet.betId)
        , ("uuid", mStrEnc bet.uuid)
        , ("active", Json.Encode.bool bet.active)
        ]
  in
    Json.Encode.object
      [ ("bet", betObject)]

type alias IncomingBet = {bet:Bet}

decode : Decoder Bet
decode =
  Json.Decode.map
    (\x -> x.bet)
    decodeIncoming

decodeIncoming : Decoder IncomingBet
decodeIncoming =
  Json.Decode.object1
    IncomingBet
    ("bet" := decodeBet)

decodeBet : Decoder Bet
decodeBet =
  Json.Decode.object4 Bet
    ("answers" := Bets.Types.Answers.decode)
    ("betId" := (maybe Json.Decode.int))
    ("uuid" := (maybe Json.Decode.string))
    ("active" := Json.Decode.bool)
