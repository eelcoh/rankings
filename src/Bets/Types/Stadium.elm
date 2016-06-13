module Bets.Types.Stadium exposing (decode, encode)

import Json.Encode
import Json.Decode exposing (Decoder, (:=), maybe, object2)

import Bets.Types exposing (Stadium)

decode : Decoder Stadium
decode =
  object2 Stadium
    ("stadium" := Json.Decode.string)
    ("town" := Json.Decode.string)

encode : Stadium -> Json.Encode.Value
encode {stadium, town} =
  Json.Encode.object
    [ ("stadium", Json.Encode.string stadium)
    , ("town", Json.Encode.string town)
    ]
