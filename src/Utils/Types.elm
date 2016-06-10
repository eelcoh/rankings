module Utils.Types (roundFromString) where

import Bets.Types exposing (Round(..))

roundFromString : String -> Round
roundFromString s =
  case s of
    "I" ->
      I
    "II" ->
      II
    "III" ->
      III
    "IV" ->
      IV
    "VI" ->
      V
    _ ->
      VI
