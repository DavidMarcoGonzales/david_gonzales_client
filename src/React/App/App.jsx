import React, { Component } from 'react';

import Workbook from "../Workbook/Workbook.jsx";
import TriggerManagement from '../TriggerManagement/TriggerManagement.jsx';
import CoursesPage from "../../React-Redux/New-Component/CoursesPage/CoursesPage";
import ManageCoursePage from '../../React-Redux/New-Component/CoursePage/CoursePage';

import { NavLink, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="navbar navbar-default" style={{ marginBottom: '0px' }} >
          <ul className="nav navbar-nav">
          <li className="nav"><NavLink to="/api/Workbook">TCI Student Workbook</NavLink></li>
          <li className="nav"><NavLink to="/api/TriggerManagement">Trigger Management</NavLink></li>
          <li className="nav"><NavLink to="/api/courses">Courses</NavLink></li>
          </ul>
        </div>
        <switch>
        <Route path="/api/Workbook" component={Workbook} />
        <Route path="/api/TriggerManagement" component={TriggerManagement} />
        <Route path="/api/courses" component={CoursesPage} />
          <Route exact path="/api/course" component={ManageCoursePage} />
          <Route path="/api/course/:id" component={ManageCoursePage} />
        </switch>
      </div>
    );
  }
}
export default App;
