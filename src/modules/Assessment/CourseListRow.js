/**
 * Created by David on 11/12/2016.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a> </td>
      <td><Link to={'/course/' + course.id}> {course.title}</Link> </td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.protTypes = {
  course: PropTypes.object.isRequired
}
export default CourseListRow;
