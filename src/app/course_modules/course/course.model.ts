import { Schema, model } from 'mongoose';
import { TCourse, TSchedule } from './course.interface';

const ScheduleSchema = new Schema<TSchedule>({
  startDate: { type: String, required: true },
  endDate: { type: String, required: true },
  classDays: { type: [String], required: true },
  classTime: { type: String, required: true },
});

const CourseSchema = new Schema<TCourse>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  level: { type: String, required: true },
  topics: { type: [String], required: true },
  schedule: { type: ScheduleSchema, required: true },
  isDeleted: { type: Boolean, default: false },
});

export const Course = model<TCourse>('Course', CourseSchema);
