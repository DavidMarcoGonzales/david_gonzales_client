import React, { Component } from 'react';

import Workbook from "../Workbook/Workbook.jsx";
// Test Test Test (Start) Test Test Test
import CoursesPage from "../../React-Redux/React-Redux-Test/CoursesPage";
// Test Test Test ( End ) Test Test Test

import { NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar navbar-default" style={{ marginBottom: '0px' }} >
          <ul className="nav navbar-nav">
            <li className="nav"><NavLink to="/api/Workbook">TCI Student Workbook</NavLink></li>
            {/* Test Test Test (Start) Test Test Test */}
            <li className="nav"><NavLink to="/api/Test">Test</NavLink></li>
            {/* Test Test Test ( End ) Test Test Test */}

          </ul>
        </div>
        <Route path="/api/Workbook" component={Workbook} />
        {/* Test Test Test (Start) Test Test Test */}
        <Route path="/api/Test" component={CoursesPage}  />
        {/* Test Test Test ( End ) Test Test Test */}
      </div>
    );
  }
}
export default App;
