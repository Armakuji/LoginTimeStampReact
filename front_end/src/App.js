import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import { Route, Switch } from "react-router-dom";

import Home from './component/Home';
import Login from './component/Login';
import Register from './component/Register';

class App extends Component {
  render() {
    return (
      

      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/Home" component={Home} />
      </Switch>
    );
  }
}

export default App;
