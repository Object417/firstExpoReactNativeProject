import { createSlice } from "@reduxjs/toolkit"

import hiragana from "./hiragana.json"

const hiraganaSlice = createSlice({
  name: "hiragana",
  initialState: hiragana,
  reducers: {
    editLetter(state, { payload }) {
      state[payload.letter] = payload
    },
    deleteLetter(state, { payload }) {
      delete state[payload]
    }
  }
})

export function hiraganaSelector(state) {
  return state.hiragana
}

export const { editLetter, deleteLetter } = hiraganaSlice.actions

export default hiraganaSlice.reducer
