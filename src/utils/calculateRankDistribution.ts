import { studentsData, type RankType,  } from "@/constants";
import { getRank } from "./getRank";

export const calculateRankDistribution = () => {
  const distribution: Record<RankType, number> = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };

  studentsData.forEach(student => {
    const rank = getRank(student.ortachaBall);
    distribution[rank]++;
  });

  return distribution;
};
