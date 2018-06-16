import React, { Component } from "react";
import QuizContainer from "./containers/QuizContainer";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducerIndex from "./reducers/reducerIndex";

const store = createStore(reducerIndex); //Creating the Redux store with reducerIndex as the values to be stored.

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* Wrapping my QuizContainer component in the React-Redux Provider component makes the Redux store available everywhere in my app. */}
        <QuizContainer />
      </Provider>
    );
  }
}

export default App;
