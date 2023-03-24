import { configureStore } from "@reduxjs/toolkit"
import hiraganaReducer from "./hiraganaSlice"
import quizReducer from "./quizSlice"
import userReducer from "./userSlice"

const store = configureStore({
  reducer: {
    hiragana: hiraganaReducer,
    quiz: quizReducer,
    user: userReducer
  }
})

export default store
