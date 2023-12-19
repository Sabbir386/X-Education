import express from 'express';
import { AdminControllers } from './admin.controller';
// import { UserControllers } from './admin.controller';
const router = express.Router();

router.post('/', AdminControllers.createAdmin);

export const AdminRegisterRoutes = router;
