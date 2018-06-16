import React, { PureComponent } from "react";
import QuestionContainer from "./QuestionContainer";
import NameDisplay from "../components/NameDisplay";
import NameForm from "../components/NameForm";
import "./quizContainer.css";
import { connect } from "react-redux";
import { toggleDisplayQuestions } from "../actions/displayQuestions";

class QuizContainer extends PureComponent {// QuizContainer class component functions as the container component for all other components. Anything outside of questions and score goes here (such as NameForm and NameDisplay components).
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: ""
    };
  }

  onChange = e => {// Function fired to update the state when fName and/or lName values are changed via NameForm component.
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onClick = () => {// Event handler fired when buttons in NameForm or NameDisplay components are clicked. Dispatches an action to appropriate reducer to toggle boolean value for displayQuestions value in Redux store.
    this.props.onToggleDisplayQuestions();
  }

  render() {
    return (
      <div
        className="container"
        style={{ height: "100vh", paddingTop: "15px", overflowY: "hidden" }}
      >
        {this.props.displayQuestions && (
          <div className="row">
            <NameDisplay
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              onClick={this.onClick}
            />
          </div>
        )}
        {!this.props.displayQuestions && (
          <div className="row centered">
            <div className="col-4">
              <NameForm
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                onChange={this.onChange}
                onClick={this.onClick}
              />
            </div>
          </div>
        )}
        {this.props.displayQuestions && (
          <div className="row centered">
            <QuestionContainer
              onAnswerSelect={this.onAnswerSelect}
              restartQuiz={this.restartQuiz}
            />
          </div>
        )}{/* Conditional rendering for NameForm, NameDisplay, and QuestionContainer components depending on the boolean value of displayQuestions from Redux store. */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  displayQuestions: state.displayQuestions
});
const mapDispatchToProps = dispatch => ({
  onToggleDisplayQuestions: () => dispatch(toggleDisplayQuestions())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuizContainer);// Connecting component to Redux store to retrieve the value of displayQuestions (via mapStateToProps) and flip that value (via mapDispatchToProps).
