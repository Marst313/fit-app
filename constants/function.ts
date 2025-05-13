import { BmiResult } from "./type";

export function calculateBmi(weight: number, height: number): BmiResult {
  const bmi = weight / Math.pow(height / 100, 2);

  if (bmi < 18.5) {
    return {
      bmi,
      status: "UNDERWEIGHT",
      image: require("@/assets/images/avatar/underweightFemale.png"),
    };
  } else if (bmi < 25) {
    return {
      bmi,
      status: "NORMAL",
      image: require("@/assets/images/avatar/healthyFemale.png"),
    };
  } else if (bmi < 30) {
    return {
      bmi,
      status: "OVERWEIGHT",
      image: require("@/assets/images/avatar/overweightFemale.png"),
    };
  } else {
    return {
      bmi,
      status: "OBESE",
      image: require("@/assets/images/avatar/obeseFemale.png"),
    };
  }
}
