module Bets.Types.Answer exposing (isComplete, summary, encode, encodeAnswer, decode)

import Json.Encode
import Json.Decode exposing (Decoder, (:=), object2, object4, andThen, maybe)

import Bets.Json.Encode exposing (mStrEnc)

import Bets.Types exposing (Answer, AnswerID, AnswerT(..))
import Bets.Types.Group
import Bets.Types.Round
import Bets.Types.Pos
import Bets.Types.Team
import Bets.Types.Match
import Bets.Types.Participant
import Bets.Types.Topscorer
import Bets.Types.Bracket
import Bets.Types.BestThirds
import Bets.Types.Score
import Bets.Types.Draw
import Bets.Types.Points

isComplete : Answer -> Bool
isComplete (answerId, answer) =
  case answer of
    AnswerGroupMatch group match mScore points ->
      Bets.Types.Score.isComplete mScore

    AnswerGroupPosition group pos draw points ->
      Bets.Types.Draw.isComplete draw

    AnswerGroupBestThirds bestThirds points ->
      Bets.Types.BestThirds.isComplete bestThirds

    AnswerMatchWinner round match nextID mTeam points ->
      Bets.Types.Match.isComplete match mTeam

    AnswerBracket bracket points ->
      Bets.Types.Bracket.isComplete bracket

    AnswerTopscorer topscorer points ->
      Bets.Types.Topscorer.isComplete topscorer

    AnswerParticipant participant ->
      Bets.Types.Participant.isComplete participant

summary : Answer -> String
summary (answerId, answer) =
  case answer of
    AnswerGroupMatch group match mScore points ->
      "Wedstrijden " ++ (Bets.Types.Group.toString group)

    AnswerGroupPosition group pos draw points ->
      "Stand " ++ (Bets.Types.Group.toString group)

    AnswerGroupBestThirds bestThirds points ->
      "Beste nummers 3"

    AnswerMatchWinner round match nextID mTeam points ->
      "MatchWinner"
    -- should be ++ match id

    AnswerBracket bracket points ->
      "Schema"

    AnswerTopscorer topscorer points ->
      "Topscorer"

    AnswerParticipant participant ->
      "Over jou"

encodeAnswer : Answer -> (AnswerID, Json.Encode.Value)
encodeAnswer (answerId, answerT) =
  (answerId, encodeAnswerT answerT)

encode : Answer -> Json.Encode.Value
encode (answerID, answerT) =
    Json.Encode.object
      [ ("id", Json.Encode.string answerID)
      , ("answer", encodeAnswerT answerT)
      ]

encodeAnswerT : AnswerT -> Json.Encode.Value
encodeAnswerT answerT =
  case answerT of
    AnswerGroupMatch group match mScore points ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-group-match")
        , ("group", Bets.Types.Group.encode group)
        , ("match", Bets.Types.Match.encode match)
        , ("score", Bets.Types.Score.encodeMaybe mScore)
        , ("points", Bets.Types.Points.encode points)
        ]

    AnswerGroupPosition group pos draw points ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-group-position")
        , ("group", Bets.Types.Group.encode group)
        , ("pos", Bets.Types.Pos.encode pos)
        , ("draw", Bets.Types.Draw.encode draw)
        , ("points", Bets.Types.Points.encode points)
        ]

    AnswerGroupBestThirds bestThirds points ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-group-best-thirds")
        , ("best-thirds", Bets.Types.BestThirds.encode bestThirds)
        , ("points", Bets.Types.Points.encode points)
        ]

    AnswerMatchWinner round match nextID mTeam points ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-match-winner")
        , ("round", Bets.Types.Round.encode round)
        , ("match", Bets.Types.Match.encode match)
        , ("next-id", mStrEnc nextID)
        , ("team", Bets.Types.Team.encodeMaybe mTeam)
        , ("points", Bets.Types.Points.encode points)
        ]

    AnswerBracket bracket points ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-bracket")
        , ("bracket", Bets.Types.Bracket.encode bracket)
        , ("points", Bets.Types.Points.encode points)
        ]

    AnswerTopscorer topscorer points ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-topscorer")
        , ("topscorer", Bets.Types.Topscorer.encode topscorer)
        , ("points", Bets.Types.Points.encode points)
        ]

    AnswerParticipant participant ->
      Json.Encode.object
        [ ("answerType", Json.Encode.string "answer-participant")
        , ("participant", Bets.Types.Participant.encode participant)
        ]

{-

toAnswer : AnswerID -> AnswerT -> Answer
toAnswer =
  (,)

decode : Decoder Answer
decode =
  Json.Decode.tuple2
    toAnswer
    (Json.Decode.string)
    (decodeAnswerT)


decode : Decoder Answer
decode =
  Json.Decode.object2
    toAnswer              -- AnswerID -> AnswerT -> Answer
--    Json.Decode.string    -- Decoder AnswerID
    ("id" := Json.Decode.string)
    ("answer" := decodeAnswerT)         -- Decoder AnswerT
-}

decode : Decoder AnswerT
decode =
  ("answerType" := Json.Decode.string) `andThen` decodeAnswerTDetails

decodeAnswerTDetails : String -> Decoder AnswerT
decodeAnswerTDetails s =
  case s of
    "answer-group-match" ->
      Json.Decode.object4 AnswerGroupMatch
        ("group" := Bets.Types.Group.decode)
        ("match" := Bets.Types.Match.decode)
        ("score" := (maybe Bets.Types.Score.decode))
        ("points" := Bets.Types.Points.decode)

    "answer-group-position" ->
      Json.Decode.object4 AnswerGroupPosition
        ("group" := Bets.Types.Group.decode)
        ("pos" := Bets.Types.Pos.decode)
        ("draw" := Bets.Types.Draw.decode)
        ("points" := Bets.Types.Points.decode)

    "answer-group-best-thirds" ->
      Json.Decode.object2 AnswerGroupBestThirds
        ("best-thirds" := Bets.Types.BestThirds.decode)
        ("points" := Bets.Types.Points.decode)

    "answer-match-winner" ->
      Json.Decode.object5 AnswerMatchWinner
        ("round" := Bets.Types.Round.decode)
        ("match" := Bets.Types.Match.decode)
        ("next-id" := (maybe Json.Decode.string))
        ("team" := (maybe Bets.Types.Team.decode))
        ("points" := Bets.Types.Points.decode)

    "answer-bracket" ->
      Json.Decode.object2 AnswerBracket
        ("bracket" := Bets.Types.Bracket.decode)
        ("points" := Bets.Types.Points.decode)

    "answer-topscorer" ->
      Json.Decode.object2 AnswerTopscorer
        ("topscorer" := Bets.Types.Topscorer.decode)
        ("points" := Bets.Types.Points.decode)

    "answer-participant" ->
      Json.Decode.object1 AnswerParticipant
        ("participant" := Bets.Types.Participant.decode)

    _ ->
      Json.Decode.fail ("unknown type of question")
