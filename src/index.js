import React from "react";
import {Router, Route, browserHistory, IndexRoute} from "react-router";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import configureStore from "./store/configureStore";

/* action modules */
/*
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
*/

/* CSS */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

/* Modules */
import Header from "./Header";
import Dashboard from "./modules/Dashboard/Dashboard";
import Rationale from "./modules/Rationale/Rationale";
import Situational_Awareness from "./modules/Situational_Awareness/Situational_Awareness";
import TCI from "./modules/TCI/TCI";
import Assessment from "./modules/Assessment/Assessment";
import ManageCoursesPage from './modules/Assessment/ManageCoursePage';
import About from "./modules/About/About";




/* Magic */
const store = configureStore();
/*
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
*/

ReactDOM.render(
  (
    <Provider store={store}>
      <Router history={browserHistory}>
        <Route path="/" component={Header}>
          <IndexRoute component={Dashboard}/>
          <Route path="/Rationale" component={Rationale}/>
          <Route path="/Situational_Awareness" component={Situational_Awareness}/>
          <Route path="/TCI" component={TCI}/>
          <Route path="/Assessment" component={Assessment}/>
          <Route path="/course" component={ManageCoursesPage}/>
          <Route path="/course/:id" component={ManageCoursesPage}/>
          <Route path="/about" component={About}/>
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
);
