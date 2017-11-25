import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from './courseActions';


class CoursesPage extends React.Component {
  courseRow(course, index) {
    return <div key={index}>{course.title}</div>;
  }

  render() {
    // debugger;
    return (
      <div>
        <h1>Courses</h1>
        {this.props.courses.map(this.courseRow)}
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
