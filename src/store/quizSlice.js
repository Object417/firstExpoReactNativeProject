const { createSlice } = require("@reduxjs/toolkit")

const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    status: "not started", // "not started", "in progress", "finished"
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
    }
  }
})

export function quizStateSelector(state) {
  return state.quiz
}

export const { setStatus, setScore, setWordList, setWordIndex } =
  quizSlice.actions
export default quizSlice.reducer
