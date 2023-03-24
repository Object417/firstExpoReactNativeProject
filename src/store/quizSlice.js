import { createSlice } from "@reduxjs/toolkit"

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    score: 0,
    wordList: [],
    wordIndex: 0
  },
  reducers: {
    setStatus(state, { payload }) {
      state.status = payload
    },
    setScore(state, { payload }) {
      state.score = payload
    },
    setWordList(state, { payload }) {
      state.wordList = payload
    },
    setWordIndex(state, { payload }) {
      state.wordIndex = payload
    },
    setState(state, { payload }) {
      return payload
    }
  }
})

export function quizStateSelector(state) {
  return state.quiz
}

export const { setStatus, setScore, setWordList, setWordIndex, setState } =
  quizSlice.actions
export default quizSlice.reducer
