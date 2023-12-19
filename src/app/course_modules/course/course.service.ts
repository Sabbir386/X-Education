import mongoose from 'mongoose';
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
const getSingleCourseFromDb = async (courseId: mongoose.Types.ObjectId) => {
  const result = await Course.findById(courseId);
  if (!result) {
    throw new Error('Invalid Course Id');
  }
  return result;
};
const updateCourseFromDb = async (courseId: string, data: object) => {
  const result = await Course.findByIdAndUpdate({ _id: courseId }, data, {
    new: true,
  });
  if (!result) {
    throw new Error('Invalid Course Id');
  }
  return result;
};
const deleteCourseFromDb = async (courseId: string) => {
  const result = await Course.findByIdAndDelete({ _id: courseId });
  if (!result) {
    throw new Error('Invalid Course Id');
  }
  return result;
};

export const CourseServices = {
  createCourseIntoDb,
  getAllCourseFromDb,
  getSingleCourseFromDb,
  updateCourseFromDb,
  deleteCourseFromDb,
};
