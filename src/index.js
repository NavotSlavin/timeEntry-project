import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import Register from './components/Register'
import Login from './components/Login'
import { BrowserRouter as Router, Route } from "react-router-dom";

import './scss/index.scss'

const routing = (
    <Router token={''}>
      <div>
        <Route path="/home/:id" component={App} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )
//take the react component  and show it on the scree
ReactDOM.render(
    routing,//component
    document.querySelector('#root')  //dom element ref
);