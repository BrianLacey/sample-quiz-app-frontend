const displayQuestions = (displayQuestions = false, action) => {// Reducer that changes the value of the displayQuestions boolean in the Redux store based on the action dispatched.
  switch (action.type) {
    case "TOGGLE_DISPLAY_QUESTIONS":// Flips the boolean to the opposite value.
      return !displayQuestions;
    case "DISPLAY_QUESTIONS_VALUE":// Assigns a specific value to displayQuestions.
      return (displayQuestions = action.boolean);
    default:// No changes made in default case.
      return displayQuestions;
  }
};

export default displayQuestions;
