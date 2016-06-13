module Bets.Types.Points exposing (encode, decode)

import Json.Encode

import Bets.Types exposing (Points)
import Bets.Json.Encode exposing (mIntEnc)
import Json.Decode exposing (Decoder, (:=), maybe, object2)

encode : Points -> Json.Encode.Value
encode points =
  mIntEnc points

decode : Decoder Points
decode =
  maybe Json.Decode.int
