import type { RankType } from "@/constants";

export const getRank = (score: number): RankType => {
  if (score >= 90) return "A";
  if (score >= 75) return "B";
  if (score >= 60) return "C";
  return "D";
};
