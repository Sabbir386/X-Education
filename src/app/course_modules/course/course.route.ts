import express from 'express';
import { CourseControllers } from './course.controller';
const router = express.Router();

router.post('/', CourseControllers.createCourse);
router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSpecificCourseById);
router.patch('/:id', CourseControllers.updateCourseById);
router.delete('/:id', CourseControllers.deleteCourseById);

export const CourseRoutes = router;
