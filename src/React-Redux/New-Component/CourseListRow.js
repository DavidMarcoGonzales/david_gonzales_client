import React, {PropTypes} from 'react';
// import { NavLink } from "react-router-dom";

const CourseListRow = ({course}) => {
  return (
    <tr>
      <td><a href={course.watchHref} target="_blank">Watch</a></td>
      {/* <td><NavLink to={"/api/Workbook/" + course.id}>{course.title}</NavLink></td> */}
      <td>{course.title}</td>
      <td>{course.id}</td>
      <td>{course.authorId}</td>
      <td>{course.category}</td>
      <td>{course.length}</td>
    </tr>
  );
};

CourseListRow.propTypes = {
  course: PropTypes.object.isRequired
};

export default CourseListRow;
