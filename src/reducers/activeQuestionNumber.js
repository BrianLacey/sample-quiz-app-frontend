const activeQuestionNumber = (active = 0, action) => {// Reducer that determines the activeQuestionNumber in the Redux store based on actions dispatched.
  switch (action.type) {
    case "INCREMENT_NUMBER":// Increments one in this case.
      return active + 1;
    case "DECREMENT_NUMBER":// Decrements one in this case.
      return active - 1;
    case "SET_NUMBER":// Sets to a specific number in this case.
      return action.num;
    default:// No changes made in default case.
      return active;
  }
};

export default activeQuestionNumber;
