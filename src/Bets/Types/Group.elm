module Bets.Types.Group (encode, decode, toString, toGroup) where

import Json.Encode
import Json.Decode exposing (Decoder, (:=), succeed, andThen)

import Bets.Types exposing (Group(..))

toString : Group -> String
toString grp =
  case grp of
    A ->
      "A"
    B ->
      "B"
    C ->
      "C"
    D ->
      "D"
    E ->
      "E"
    F ->
      "F"

toGroup : String -> Group
toGroup s =
  case s of
    "A" ->
      A
    "B" ->
      B
    "C" ->
      C
    "D" ->
      D
    "E" ->
      E
    _ ->
      F


encode : Group -> Json.Encode.Value
encode grp =
  Json.Encode.string (toString grp)

decode : Decoder Group
decode =
  Json.Decode.string
  |> Json.Decode.map toGroup
