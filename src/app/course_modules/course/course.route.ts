import express from 'express';
import { CourseControllers } from './course.controller';
import { isAdmin } from '../../middleware/isAdmin';
const router = express.Router();

router.post('/', isAdmin, CourseControllers.createCourse);
router.get('/', CourseControllers.getAllCourses);
router.get('/:id', CourseControllers.getSpecificCourseById);
router.patch('/:id', isAdmin, CourseControllers.updateCourseById);
router.delete('/:id', isAdmin, CourseControllers.deleteCourseById);

export const CourseRoutes = router;
