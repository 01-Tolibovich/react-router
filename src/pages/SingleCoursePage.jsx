import { useNavigate, useParams } from "react-router-dom";
import courses from "../data/coursesData";
import { useEffect } from "react";

const SingleCoursePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  const course = courses.find((course) => course.slug === params.slug);

  useEffect(() => {
    if (!course) {
      navigate("..", { relative: "path" });
    }
  }, [course, navigate]);

  return (
    <div>
      <h1>{course?.title}</h1>
      <p>Slug: {course?.slug}</p>
      <span>ID: {course?.id}</span>
    </div>
  );
};

export default SingleCoursePage;
