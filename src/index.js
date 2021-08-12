import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mainpage from "./Main Page/Mainpage"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
ReactDOM.render(
  <Router>
    <Route path="/" component={Mainpage} exact />
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

