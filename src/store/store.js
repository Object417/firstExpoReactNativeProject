import { configureStore } from "@reduxjs/toolkit"
import { default as hiraganaReducer } from "./hiraganaSlice"
import { default as quizReducer } from "./quizSlice"

const store = configureStore({
  reducer: {
    hiragana: hiraganaReducer,
    quiz: quizReducer
  }
})

export default store
