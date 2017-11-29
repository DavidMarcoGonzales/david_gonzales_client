import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from './courseActions';
import CourseList from './CourseList';

import {NavLink} from 'react-router-dom';


class CoursesPage extends React.Component {
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const { courses } = this.props;
    return (
      <div>
        <h1>Courses</h1>
        <NavLink className="btn btn-primary pull-left" to="/api/course">Add Course</NavLink>
        <CourseList courses={courses} />
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
const mapStateToProps = (state, ownProps) => {
  return {
    courses: state.courses
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
