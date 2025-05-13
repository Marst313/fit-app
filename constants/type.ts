type TDays = "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";

export type BmiResult = {
  bmi: number;
  status: "UNDERWEIGHT" | "NORMAL" | "OVERWEIGHT" | "OBESE";
  image: any;
};

export type TWeeklyProgress = {
  day: TDays;
  date: string;
  progress: number;
};
