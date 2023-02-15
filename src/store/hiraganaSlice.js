import { createSlice } from "@reduxjs/toolkit"

import hiragana from "./hiragana.json"
import dakuten from "./dakuten.json"
import handakuten from "./handakuten.json"

const hiraganaSlice = createSlice({
  name: "hiragana",
  initialState: { hiragana, dakuten, handakuten },
  reducers: {}
})

export function hiraganaSelector(state) {
  return state.hiragana
}
export function fullHiraganaSelctor(state) {
  return {
    ...state.hiragana.hiragana,
    ...state.hiragana.dakuten,
    ...state.hiragana.handakuten
  }
}
export function hiraganaBaseSelector(state) {
  return state.hiragana.hiragana
}
export function dakutenSelector(state) {
  return state.hiragana.dakuten
}
export function handakutenSelector(state) {
  return state.hiragana.handakuten
}

export default hiraganaSlice.reducer
