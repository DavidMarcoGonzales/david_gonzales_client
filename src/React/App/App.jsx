import React, { Component } from 'react';

import Workbook from "../Workbook/Workbook.jsx";
import CoursesPage from "../React-Redux-Test/CoursesPage";
import {  NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar navbar-default" style={{ marginBottom: '0px' }} >
          <ul className="nav navbar-nav">
          <li className="nav"><NavLink to="/api/Workbook">TCI Student Workbook</NavLink></li>
          <li className="nav"><NavLink to="/api/Test">Test</NavLink></li>
          </ul>
        </div>
        <Route path="/api/Workbook" component={Workbook} />
        <Route path="/api/Test" component={CoursesPage}  />

        </div>
    );
  }
}
export default App;
