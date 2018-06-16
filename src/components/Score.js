import React from "react";
import { connect } from "react-redux";
import { setQuestionNumber } from "../actions/activeQuestionNumber";
import { displayQuestionsFalse } from "../actions/displayQuestions";

function Score(props) {// Functional component that compares the user's selected answers (retrieved from the Redux store via mapStateToProps) with the correct answers and calculates a percentage score to be displayed to the user. Also displays a 'restart' button which dispatches actions to reducers that set the activeQuestionNumber to 0 and displayQuestions to false in the Redux store.
  const calculateScore = (answerChoices, answers) => {// User's answer choices are compared with answers here, then a percentage is calculated and returned.
    let totalPoints = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i].answer === answerChoices[`question${i + 1}`]) {
        totalPoints++;
      }
    }
    return (totalPoints / answers.length) * 100;
  };

  const restartQuiz = () => {// Restart button event handler. Dispatches actions to reducers that effectively reset the activeQuestionNumber and displayQuestions values in the Redux store.
    props.onSetQuestionNumber(0);
    props.onDisplayQuestionsFalse(false);
  };

  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <h4>Your Score:</h4>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div style={{ fontSize: "500%", color: "blue" }}>
            {calculateScore(props.answerChoices, props.answers)}%
          </div>
          <div>
            <input
              type="button"
              className="btn btn-outline-info"
              value="Restart"
              onClick={restartQuiz}
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = state => ({ answerChoices: state.answerChoices });
const mapDispatchToProps = dispatch => ({
  onDisplayQuestionsFalse: boolean => dispatch(displayQuestionsFalse(boolean)),
  onSetQuestionNumber: num => dispatch(setQuestionNumber(num))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Score);// Connecting component to Redux store, as well as mapStateToProps to retrieve user answers and mapDispatchToProps to edit Redux store values.
