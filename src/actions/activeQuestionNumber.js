export const incrementQuestionNumber = () => ({
  type: "INCREMENT_NUMBER"
});// When this action is dispatched from the corresponding function within a connected component, it will match the reducer case that increases the active question number by 1.

export const decrementQuestionNumber = () => ({
  type: "DECREMENT_NUMBER"
});// When this action is dispatched from the corresponding function within a connected component, it will match the reducer case that decreases the active question number by 1.

export const setQuestionNumber = num => ({
  type: "SET_NUMBER",
  num
});// When this action is dispatched from the corresponding function within a connected component, it will match the reducer case that sets the active question number to a specific value.
