import React from "react";
import "./activeQuestion.css";
import { connect } from "react-redux";
import { writeAnswerChoice } from "../actions/answerChoices";
import { incrementQuestionNumber } from "../actions/activeQuestionNumber";

function ActiveQuestion(props) {// Functional component that receives the current question from the QuestionContainer parent component and properly displays it to the DOM.
  const answerChoiceDisplayPrep = (answerChoices, activeQuestionNumber) => {// Function that maps the active question props from the parent component to JSX that is then displayed in the DOM.
    let colChoices = answerChoices.map(choice => (// Maps active question data to Bootstrap columns.
      <div className="col-6 text-center" key={choice}>
        <input
          type="button"
          className="btn btn-outline-primary answer-choices"
          name={activeQuestionNumber}
          value={choice}
          onClick={onAnswerSelect}
        />
      </div>
    ));
    return (cols => {// IIFE that assigns the columns made above to Bootstrap rows 2 at a time for clean, even presentation.
      let displayableChoices = [];
      for (let i = 0; i < cols.length; i++) {
        if (i % 2 === 0) {
          displayableChoices.push(
            <div className="row" key={i / 2} style={{ marginTop: "5%" }}>
              {cols[i]}
              {cols[i + 1]}
            </div>
          );
        }
      }
      return displayableChoices;
    })(colChoices);
  };

  const onAnswerSelect = e => {// Event handler function that dispatches actions to reducers in order to update the Redux store with user's chosen answer and displays the next question.
    let answerChoice = {};
    answerChoice[`question${e.target.name}`] = e.target.value;
    props.onWriteAnswerChoice(answerChoice);
    props.onIncrementQuestionNumber();
  };

  return props.active ? (// Conditional rendering which renders only when props have been received from component; otherwise renders null. To preserve clean presentation.
    <React.Fragment>
      <div className="row">
        <div className="col text-right">
          <small>
            {props.active.questionNumber} of {props.totalQuestionsNumber}
          </small>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h4>Question:</h4>
          <h5>{props.active.question}</h5>
        </div>
      </div>
      {answerChoiceDisplayPrep(
        props.active.choices,
        props.active.questionNumber
      )}
    </React.Fragment>
  ) : null;
}

const mapDispatchToProps = dispatch => ({
  onWriteAnswerChoice: answerChoice =>
    dispatch(writeAnswerChoice(answerChoice)),
  onIncrementQuestionNumber: () => dispatch(incrementQuestionNumber())
});

export default connect(
  null,
  mapDispatchToProps
)(ActiveQuestion);// Dispatching actions to reducers in order to manipulate values in the Redux store. Also connecting the component to the React-Redux logic, giving access to the Redux store.
