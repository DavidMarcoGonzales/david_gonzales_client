import React, { Component } from 'react';

import Dashboard from "../Dashboard/Dashboard.jsx";
import Workbook from "../Workbook/Workbook.jsx";
import Situational_Awareness from "../Situational_Awareness/Situational_Awareness.jsx";
import Assessment from "../Assessment/Assessment.jsx";
import About from "../About/About.jsx";
import {  NavLink, Route } from "react-router-dom";

class TCIApp extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar navbar-default" style={{ marginBottom: '0px' }} >
          <ul className="nav navbar-nav">
            <li className="nav"><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li className="nav"><NavLink to="/api/Workbook">TCI Student Workbook</NavLink></li>
            <li className="nav"><NavLink to="/api/Situational_Awareness">Situational Awareness</NavLink></li>
            <li className="nav"><NavLink to="/api/Assessment">Assessment</NavLink></li>
            <li className="nav"><NavLink to="/about">About</NavLink></li>
          </ul>
        </div>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route path="/api/Workbook" component={Workbook} />
        <Route path="/api/Situational_Awareness" component={Situational_Awareness} />
        <Route path="/api/Assessment" component={Assessment} />
        <Route path="/about" component={About} />
      </div>
    );
  }
}


export default TCIApp;
