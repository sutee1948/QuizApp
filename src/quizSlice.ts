import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface QuizState {
  questions: any[];
  currentQuestionIndex: number;
  score: number;
  quizFinished: boolean;
}

const initialState: QuizState = {
  questions: [],
  currentQuestionIndex: 0,
  score: 0,
  quizFinished: false,
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setQuestions(state, action: PayloadAction<any[]>) {
      state.questions = action.payload;
    },
    incrementScore(state) {
      state.score += 1;
    },
    nextQuestion(state) {
      if (state.currentQuestionIndex < state.questions.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.quizFinished = true;
      }
    },
    resetQuiz(state) {
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.quizFinished = false;
    },
  },
});

export const { setQuestions, incrementScore, nextQuestion, resetQuiz } = quizSlice.actions;
export default quizSlice.reducer;
