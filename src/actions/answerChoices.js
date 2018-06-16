export const writeAnswerChoice = answerChoice => ({
  type: "WRITE_ANSWERCHOICE",
  answerChoice
});// When dispatched by a connected component function, matches the reducer case to write a the user's answer choice to the Redux store.
