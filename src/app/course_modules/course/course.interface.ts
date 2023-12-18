export type TSchedule = {
  startDate: string;
  endDate: string;
  classDays: string[];
  classTime: string;
};

export type TCourse = {
  name: string;
  description: string;
  price: string;
  duration: string;
  level: string;
  topics: string[];
  schedule: TSchedule;

  isDeleted?: boolean;
};
