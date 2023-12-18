import { Request, Response } from 'express';
import CourseValidationSchema from './course.validation';
import { CourseServices } from './course.service';

const createCourse = async (req: Request, res: Response) => {
  try {
    const userData = req.body;
    const zodParseData = CourseValidationSchema.parse(userData);
    const result = await CourseServices.createCourseIntoDb(zodParseData);

    res.status(201).json({
      success: true,
      message: 'The course has been added successfully',
      data: result,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err,
    });
  }
};
export const CourseControllers = {
  createCourse,
};
