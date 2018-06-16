const answerChoices = (answerChoices = {}, action) => {
  // Reducer that saves users answer choices in the Redux store.
  switch (action.type) {
    case "WRITE_ANSWERCHOICE": // Creates a copy of the Redux store state called updatedAnswerChoices (adhering to non-mutating principals), uses Object.keys method to save the anonymous object's key to a variable, then assigns that key value pair to updatedAnswerChoices. If a new value has a key that already exists, the new value will overwrite the old value.
      let updatedAnswerChoices = { ...answerChoices };
      let key = Object.keys(action.answerChoice)[0];
      updatedAnswerChoices[key] = action.answerChoice[key];
      return updatedAnswerChoices;
    default:
      // No changes made in default case.
      return answerChoices;
  }
};
export default answerChoices;
