import { combineReducers } from "redux";
import answerChoices from "./answerChoices";
import displayQuestions from "./displayQuestions";
import activeQuestionNumber from "./activeQuestionNumber";

export default combineReducers({// reducerIndex to include all applicable reducers used in the app. Also all values retrieved from the Redux store are assigned these keys.
  answerChoices,
  displayQuestions,
  activeQuestionNumber
});
