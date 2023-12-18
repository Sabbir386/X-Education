import { TCourse } from './course.interface';
import { Course } from './course.model';
const createCourseIntoDb = async (course: TCourse) => {
  const result = await Course.create(course);
  return result;
};
export const CourseServices = {
  createCourseIntoDb,
};