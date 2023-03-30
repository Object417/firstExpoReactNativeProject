import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
  name: "user",
  initialState: {
    xp: 1000,
    correctAnswers: 13,
    wrongAnswers: 4,
    name: "George Orwell",
    sex: "male"
  },
  reducers: {
    setUserXP(state, { payload }) {
      state.xp = payload
    },
    changeUserXP(state, { payload }) {
      state.xp += payload
    },
    setUserCorrectAnswers(state, { payload }) {
      state.correctAnswers = payload
    },
    changeUserCorrectAnswers(state, { payload }) {
      state.correctAnswers += payload
    },
    setUserWrongAnswers(state, { payload }) {
      state.wrongAnswers = payload
    },
    changeUserWrongAnswers(state, { payload }) {
      state.wrongAnswers += payload
    },
    setUserName(state, { payload }) {
      state.name = payload
    },
    setUserSex(state, { payload }) {
      state.sex = payload
    }
  }
})

export function userSelector(state) {
  return state.user
}

export const {
  setUserXP,
  changeUserXP,
  setUserCorrectAnswers,
  changeUserCorrectAnswers,
  setUserWrongAnswers,
  changeUserWrongAnswers,
  setUserName,
  setUserSex
} = userSlice.actions
export default userSlice.reducer
