module Utils.List exposing (..)

import List.Extra exposing (groupWhile)

groupBy : (a -> comparable) -> List a -> List (List a)
groupBy toComparable =
  groupWhile (\left right -> toComparable left == toComparable right)
