import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "./store/configureStore";


/* CSS */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

/* Modules */
import Dashboard from "./modules/Dashboard/Dashboard";
import Rationale from "./modules/Rationale/Rationale";
import Situational_Awareness from "./modules/Situational_Awareness/Situational_Awareness";
import TCI from "./modules/TCI/TCI";
import Assessment from "./modules/Assessment/Assessment";
import ManageCoursesPage from './modules/Assessment/ManageCoursePage';
import About from "./modules/About/About";


const store = configureStore();

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter >
        <div className="container">
          <nav className="navbar navbar-default" style={{
            border: '1px solid red'
          }} >
            <ul className="nav navbar-nav">
              <li><NavLink to="/">Dashboard</NavLink></li>
              <li><NavLink to="/Rationale">Rationale</NavLink></li>
              <li><NavLink to="/Situational_Awareness">Situational_Awareness</NavLink></li>
              <li><NavLink to="/TCI">TCI</NavLink></li>
              <li><NavLink to="/Assessment">Assessment</NavLink></li>
              <li><NavLink to="/course">ManageCoursesPage</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </nav>
          <Route exact path="/" component={Dashboard} />
          <Route path="/Rationale" component={Rationale} />
          <Route path="/Situational_Awareness" component={Situational_Awareness} />
          <Route path="/TCI" component={TCI} />
          <Route path="/Assessment" component={Assessment} />
          <Route path="/course" component={ManageCoursesPage} />
          <Route path="/about" component={About} />


        </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
);
