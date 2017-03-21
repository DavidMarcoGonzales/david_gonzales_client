import ReactDOM from "react-dom";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import React from "react";
import { Provider } from "react-redux";

import configureStore from "./Redux/store/configureStore";




/* CSS */
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";

/* React-Redux */
import Dashboard from "./React-Redux/Dashboard/Dashboard.jsx";
import Rationale from "./React-Redux/Rationale/Rationale.jsx";
import Situational_Awareness from "./React-Redux/Situational_Awareness/Situational_Awareness.jsx";
import TCI from "./React-Redux/TCI/TCI.jsx";
import Assessment from "./React-Redux/Assessment/Assessment.jsx";
import About from "./React-Redux/About/About.jsx";


const store = configureStore();

ReactDOM.render(
  (
    <BrowserRouter >
      <Provider store={store}>

        <div className="container">
          <div className="navbar navbar-default" style={{ border: '1px solid red' }} >
            <ul className="nav navbar-nav">
              <li className="nav"><NavLink to="/">Dashboard</NavLink></li>
              <li className="nav"><NavLink to="/api/Rationale">Rationale</NavLink></li>
              <li className="nav"><NavLink to="/api/Situational_Awareness">Situational Awareness</NavLink></li>
              <li className="nav"><NavLink to="/api/TCI">TCI</NavLink></li>
              <li className="nav"><NavLink to="/api/Assessment">Assessment</NavLink></li>
              <li className="nav"><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
          <Route exact path="/" component={Dashboard} />
          <Route path="/api/Rationale" component={Rationale} />
          <Route path="/api/Situational_Awareness" component={Situational_Awareness} />
          <Route path="/api/TCI" component={TCI} />
          <Route path="/api/Assessment" component={Assessment} />
          <Route path="/about" component={About} />
        </div>
      </Provider>
    </BrowserRouter>
  ),
  document.getElementById('root')
);
