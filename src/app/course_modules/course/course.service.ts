import { TCourse } from './course.interface';
import { Course } from './course.model';
const createCourseIntoDb = async (course: TCourse) => {
  const result = await Course.create(course);
  return result;
};
const getAllCourseFromDb = async () => {
  const result = await Course.find();
  return result;
};
const getSingleCourseFromDb = async (courseId: string) => {
  const user = new Course();
  if (await user.isUserExists(courseId)) {
    const result = await Course.findOne({ courseId });
    if (result) {
      return result;
    }
  } else {
    throw new Error('Course not found In Db');
  }
};
export const CourseServices = {
  createCourseIntoDb,
  getAllCourseFromDb,
  getSingleCourseFromDb,
};
