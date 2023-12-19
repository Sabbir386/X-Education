import { Router } from 'express';
import { CourseRoutes } from '../course_modules/course/course.route';
import { AdminRegisterRoutes } from '../course_modules/admin/admin.registers.route';

const router = Router();

const courseModulesRoutes = [
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/register',
    route: AdminRegisterRoutes,
  },
];

courseModulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
