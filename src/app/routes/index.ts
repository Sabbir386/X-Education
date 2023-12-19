import { Router } from 'express';
import { CourseRoutes } from '../course_modules/course/course.route';
import { AdminRoutes } from '../course_modules/admin/admin.routes';

const router = Router();

const courseModulesRoutes = [
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/register',
    route: AdminRoutes,
  },
  {
    path: '/login',
    route: AdminRoutes,
  },
];

courseModulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
