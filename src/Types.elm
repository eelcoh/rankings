module Types exposing (..)

import Bets.Types exposing (Bet, Round(..), Answer, AnswerT(..), Team, Bracket(..), HasQualified(..), Topscorer, Points)

import Dict

type alias UUID = String

type alias RankingSummary =
  { name : String
  , pos : Int
  , rounds : List (Round, Int)
  , topscorer : Maybe Int
  , total : Int
  , uuid : String
  }

type alias Rankings =
  { rankings : List RankingSummary }

type alias Ranking =
  { name : String
  , pos : Int
  , rounds : List (Round, Int)
  , topscorer : Maybe Int
  , total : Int
  , uuid : String
  , bet : Bets.Types.Bet
  }

type alias Amount = Int
type alias Name = String
type alias RoundInt = Int

-- histogram: number of times n teams were predicted right
type alias TeamsRightHistogram =
  Dict.Dict Int Int

-- histogram per round
type alias RoundStats =
  Dict.Dict RoundInt TeamsRightHistogram
