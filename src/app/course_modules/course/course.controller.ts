import { Request, Response } from 'express';
import CourseValidationSchema from './course.validation';
import { CourseServices } from './course.service';
import httpStatus from 'http-status';
import mongoose from 'mongoose';

const createCourse = async (req: Request, res: Response) => {
  try {
    const courseData = req.body;
    courseData.price = courseData.price.toString();
    const zodParseData = CourseValidationSchema.parse(courseData);
    const result = await CourseServices.createCourseIntoDb(zodParseData);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'The course has been added successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || 'Something went wrong',
      error: err,
    });
  }
};
const getAllCourses = async (req: Request, res: Response) => {
  try {
    const result = await CourseServices.getAllCourseFromDb();

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Courses fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
const getSpecificCourseById = async (req: Request, res: Response) => {
  try {
    const courseId = req.params.id;
    const objectIdCourseId = new mongoose.Types.ObjectId(courseId);
    const result = await CourseServices.getSingleCourseFromDb(objectIdCourseId);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Course fetched successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || 'Course Not Found',
      error: {
        code: httpStatus.NOT_FOUND,
        description: 'Course not found!',
      },
    });
  }
};

const updateCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const courseData = req.body;
    const result = await CourseServices.updateCourseFromDb(id, courseData);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Course updated successfully!',
      data: result,
    });
  } catch (err: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || 'Invalid Course Id',
      error: {
        code: httpStatus.NOT_FOUND,
        description: 'Course not found!',
      },
    });
  }
};
const deleteCourseById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await CourseServices.deleteCourseFromDb(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: 'Course deleted successfully!',
      data: null,
    });
  } catch (err: any) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: err.message || 'Invalid Course Id',
      error: {
        code: httpStatus.NOT_FOUND,
        description: 'Course not found!',
      },
    });
  }
};
export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSpecificCourseById,
  updateCourseById,
  deleteCourseById,
};
