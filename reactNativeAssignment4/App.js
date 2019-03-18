import React, {Component} from 'react';
import { Router, Stack, Scene } from "react-native-router-flux";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import PostData from './components/postData'

const App = () => (
  <Router>
    <Stack key="root">
      
      <Scene key="login" component={Login} title="Login" />
      <Scene key="dashboard" component={Dashboard} title="Dashboard" />
      <Scene key="postData" component={PostData} title="PostData" />
      
    </Stack>
  </Router>
);
export default App;