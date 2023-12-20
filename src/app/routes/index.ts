import { Router } from 'express';
import { CourseRoutes } from '../course_modules/course/course.route';
import { UserRoutes } from '../course_modules/user/user.routes';

const router = Router();

const courseModulesRoutes = [
  {
    path: '/course',
    route: CourseRoutes,
  },
  {
    path: '/register',
    route: UserRoutes,
  },
  {
    path: '/login',
    route: UserRoutes,
  },
];

courseModulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
