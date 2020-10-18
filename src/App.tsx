import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, withRouter, useHistory } from "react-router-dom";
import Header from './components/header/index'
import Profile from './components/pages/profile'

function App() {
  return (
    <div  >
 <Header/>
       <Switch>
          <Route exact path='/' component={Profile} />
        </Switch>
    </div>
  );
}

export default withRouter(App);


