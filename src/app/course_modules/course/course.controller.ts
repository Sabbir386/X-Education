import { Request, Response } from 'express';
import CourseValidationSchema from './course.validation';
import { CourseServices } from './course.service';
import httpStatus from 'http-status';

const createCourse = async (req: Request, res: Response) => {
  try {
    const courseData = req.body;
    const zodParseData = CourseValidationSchema.parse(courseData);
    const result = await CourseServices.createCourseIntoDb(zodParseData);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'The course has been added successfully',
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
    const result = await CourseServices.getSingleCourseFromDb(courseId);

    res.status(httpStatus.OK).json({
      success: true,
      message: 'Course fetched successfully!',
      data: result,
    });
  } catch (err) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: 'Course Not Found',
      error: {
        code: 404,
        description: 'Course not found!',
      },
    });
  }
};
export const CourseControllers = {
  createCourse,
  getAllCourses,
  getSpecificCourseById,
};
