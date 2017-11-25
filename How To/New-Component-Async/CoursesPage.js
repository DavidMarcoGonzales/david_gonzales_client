import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from './courseActions';
import CourseList from './CourseList';


class CoursesPage extends React.Component {
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    const {courses} = this.props;
    // debugger;
    return (
      <div>
        <h1>Courses</h1>
        {/* {courses.map(this.courseRow)} */}
        <CourseList courses={courses}/>
      </div>
    );
  }
}
CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}
const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    courses: state.courses
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  // debugger;
  return {
    actions: bindActionCreators(courseActions, dispatch)
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CoursesPage);
