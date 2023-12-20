import express from 'express';
import { userControllers } from './user.controller';

const router = express.Router();
router.post('/', userControllers.createUser);
router.get('/', userControllers.login);

export const UserRoutes = router;
