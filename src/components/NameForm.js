import React from "react";

export default function NameForm(props) {// A functional component that allows the user to enter either their first or last name (or both), as well as a button that will call a function in QuizContainer component that will setState of fName and lName then call another QuizContainer function to display the NameDisplay and QuestionContainer components.
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <label>Please enter your name:</label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={props.firstName}
            placeholder="Enter First Name"
            onChange={props.onChange}
          />
        </div>
        <div className="col">
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={props.lastName}
            placeholder="Enter Last Name"
            onChange={props.onChange}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "3%", textAlign: "right" }}>
        <div className="col">
          <input
            type="button"
            className="btn btn-primary"
            onClick={props.onClick} value="Submit"
          />
        </div>
      </div>
    </React.Fragment>
  );
}
