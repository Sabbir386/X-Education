import express from 'express';
import { CourseControllers } from './course.controller';
const router = express.Router();

router.post('/', CourseControllers.createCourse);
router.get('/', CourseControllers.getAllCourses);

export const CourseRoutes = router;
