import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Reducer from "./src/Reducers/reducer";
import IndexContainer from "./src/Containers/index";

const store = createStore(Reducer);

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <IndexContainer />
      </Provider>
    );
  }
}
