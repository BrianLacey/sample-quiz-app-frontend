import React from "react";

export default function NameDisplay(props) {// Functional component that displays the name data passed as props from the parent QuizContainer component, and also a button that calls a function in QuizContainer hides the ActiveQuestion component and displays the NameForm sibling component.
  const fullName = (fName, lName) => {
    let firstName = "";
    let lastName = "";
    if (fName) {
      firstName = " " + fName;
    }
    if (lName) {
      lastName = " " + lName;
    }
    return firstName + lastName;
  };
  return (
    <React.Fragment>
      <div className="col">
        <h4>Welcome{fullName(props.firstName, props.lastName)}!</h4>
      </div>
      <div className="col text-right">
        <input
          type="button"
          className="btn btn-secondary"
          value="Edit Name"
          onClick={props.onClick}
        />
      </div>
    </React.Fragment>
  );
}
