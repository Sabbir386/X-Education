import { Model } from 'mongoose';

export type TSchedule = {
  startDate: string;
  endDate: string;
  classDays: string[];
  classTime: string;
};

export type TCourse = {
  name: string;
  description: string;
  price: number;
  duration: string;
  level: string;
  topics: string[];
  schedule: TSchedule;
  isDeleted?: boolean;
};
// export type UserMethod = {
//   isExists(id: string): Promise<TCourse | null>;
// };
export type CourseModel = Model<TCourse, Record<string, never>>;
