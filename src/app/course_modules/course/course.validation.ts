import { z } from 'zod';

export const ScheduleValidationSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  classDays: z.array(z.string()),
  classTime: z.string(),
});
export const CourseValidationSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  duration: z.string(),
  level: z.string(),
  topics: z.array(z.string()),
  schedule: ScheduleValidationSchema,
  isDeleted: z.boolean().optional(),
});

export default CourseValidationSchema;
