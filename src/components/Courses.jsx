import { NavLink } from "react-router-dom";
import courses from "../data/coursesData";

const Courses = () => {
  return (
    <div className="courses">
      {courses.map((course) => {
        return (
          <div key={course.id} className="course">
            <h2>{course.title}</h2>
            <NavLink to={course.slug}>More</NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
