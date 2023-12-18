import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { CourseRoutes } from './app/course_modules/course/course.route';
const app: Application = express();
//parsers
app.use(express.json());
app.use(cors());

app.use('/api/course', CourseRoutes);

const getAController = (req: Request, res: Response) => {
  res.send('App is running');
};
app.get('/', getAController);
export default app;
