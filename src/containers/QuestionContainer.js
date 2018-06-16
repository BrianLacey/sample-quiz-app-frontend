import React, { PureComponent } from "react";
import ActiveQuestion from "../components/ActiveQuestion";
import previousArrow from "../assets/prev.jpg";
import Score from "../components/Score";
import { connect } from "react-redux";
import { decrementQuestionNumber } from "../actions/activeQuestionNumber";

class QuestionContainer extends PureComponent {// QuestionContainer class component that receives the JSON question data and on componentDidMount runs a setState assigning this question data to this.state.questions. It serves as a container for the components that display the active question to be answered or the score after completion.
  constructor(props) {
    super(props);
    this.questions = [
      {
        questionNumber: "1",
        question: "What format is best for representing lists of values?",
        choices: ["Array", "Object"],
        answer: "Array"
      },
      {
        questionNumber: "2",
        question: "What primitive type is '3'?",
        choices: ["Number", "String"],
        answer: "String"
      },
      {
        questionNumber: "3",
        question: "How do you do a strict comparison of values?",
        choices: ["=", "==", "===", "!=="],
        answer: "==="
      },
      {
        questionNumber: "4",
        question:
          "What is the most common way to trigger a re-render in React?",
        choices: [
          "this.state()",
          "this.setState()",
          "this.forceUpdate()",
          "this.componentWillReceiveProps()"
        ],
        answer: "this.setState()"
      }
    ];
    this.state = {
      questions: []
    };
  }

  componentDidMount() {// Would retrieve the question data from an API and setState to the response here. I'm using the JSON object this.questions as a substitute in this case.
    this.setState({
      questions: this.questions
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="col-8">
          <div className="card">
            <div className="card-body">
              <img
                src={previousArrow}
                name="previous"
                alt="previous"
                onClick={this.props.onDecrementQuestionNumber}
                style={{
                  visibility: `${
                    this.props.active === 0 ||
                    this.props.active >= this.state.questions.length
                      ? "hidden"
                      : "visible"
                  }`
                }}
              />
              {this.props.active < this.state.questions.length && (
                <ActiveQuestion
                  active={this.state.questions[this.props.active]}
                  totalQuestionsNumber={this.state.questions.length}
                />
              )}
              {this.props.active >= this.state.questions.length && (
                <Score
                  answerChoices={this.props.answerChoices}
                  answers={this.state.questions}
                  restartQuiz={this.props.restartQuiz}
                />
              )}{/* Conditional rendering for the arrow asset, the ActiveQuestion component and the Score component, depending on the current activeQuestionNumber. */}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  active: state.activeQuestionNumber
});

const mapDispatchToProps = dispatch => ({
  onDecrementQuestionNumber: () => dispatch(decrementQuestionNumber())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuestionContainer);// Connecting this component to the Redux store and execute a mapStateToProps to receive the activeQuestionNumber and mapDispatchToProps to decrement the activeQuestionNumber via dispatching an action to the appropriate reducer when the back arrow is clicked.
