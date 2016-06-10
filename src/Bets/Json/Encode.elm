module Bets.Json.Encode (mStrEnc, mIntEnc) where

import Json.Encode

mStrEnc : Maybe String -> Json.Encode.Value
mStrEnc mStr =
  case mStr of
    Just str ->
      Json.Encode.string str
    Nothing ->
      Json.Encode.null

mIntEnc : Maybe Int -> Json.Encode.Value
mIntEnc mInt =
  case mInt of
    Just i ->
      Json.Encode.int i
    Nothing ->
      Json.Encode.null
