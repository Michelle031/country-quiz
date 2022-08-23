
import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    gameState: "play",
    questionNo: 0,
    score: 0,
    capitalPlay: [],
    flagPlay: [],
    questionSet: [],
    countryOptions: [],
    question: [],
    answerSelected: false,
    selectedAnswer: null,
    answer: null,
    restart: false,
  },
  reducers: {
    setScore: (state, action) => {
      state.score = action.payload
    },
    setQuestionNo: (state,action) => {
      state.questionNo = action.payload
    },
    setCountryOption: (state,action) => {
        state.countryOptions = action.payload
    },
    setCapital: (state,action) => {
        state.capitalPlay = action.payload
    },
    setFlag: (state,action) => {
        state.flagPlay = action.payload
    },
    setQuestions: (state,action) => {
        state.questionSet = action.payload
    },
    setQuestion: (state,action) => {
        state.question = action.payload
    },
    setAnswerSelected: (state,action) => {
      state.answerSelected = action.payload
    },
    setSelectedAnswer: (state,action) => {
      state.selectedAnswer = action.payload
    },
    setAnswer: (state,action) => {
      state.answer = action.payload
    },
    setRestart: (state,action) => {
      state.restart = action.payload
  }

  },
})

// Action creators are generated for each case reducer function
export const { setScore, setQuestionNo, setCountryOption, setCapital, setFlag, setQuestions, setQuestion, setAnswerSelected, setAnswer, setSelectedAnswer, setRestart } = appSlice.actions

export const appSelector = (state) => state.app;

export default appSlice.reducer
