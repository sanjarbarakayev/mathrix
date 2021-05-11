export const state = () => ({
  questions: []
});

export const getters = {
  getExamQuestions(state) {
    return state.questions;
  }
};
