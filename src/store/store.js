import { configureStore } from "@reduxjs/toolkit"
import { default as hiraganaReducer } from "./hiraganaSlice"

const store = configureStore({
  reducer: {
    hiragana: hiraganaReducer
  }
})

export default store
