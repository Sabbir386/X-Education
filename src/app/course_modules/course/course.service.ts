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
  // console.log(result);
  return result;
};
const updateCourseFromDb = async (courseId: string, data: object) => {
  try {
    // console.log(courseId);
    const result = await Course.findByIdAndUpdate({ _id: courseId }, data, {
      new: true,
    });

    if (!result) {
      throw new Error('Invalid Course Id');
    }

    return result;
  } catch (error) {
    console.error('Error updating course:', error);

    throw error;
  }
};

export const CourseServices = {
  createCourseIntoDb,
  getAllCourseFromDb,
  getSingleCourseFromDb,
  updateCourseFromDb,
};
