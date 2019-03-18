import React, { Component } from "react";
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from "./components/Login";
import About from "./components/About";
import UserList from "./components/UserList";

const App = () => (
  <Router>
    <Stack key="root">
      <Scene key="login" component={Login} title="Login" />
      <Scene key="about" component={About} title="About" />
      <Scene key="userList" component={UserList} title="UserList" />
    </Stack>
  </Router>
);
export default App;
