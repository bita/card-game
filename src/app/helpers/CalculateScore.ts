import { useAppSelector } from "@/redux/store";

export const CalculateScore = (moves: number, diffLevel: number) => {
  const maxScore = 100;
  const faireMoves = diffLevel * diffLevel/2 + diffLevel/2;
  
  let baseScore = maxScore * (faireMoves / moves);
  let score = maxScore;

  console.log(baseScore)
  if (faireMoves < moves) {
    for (let i = 0; i < moves-faireMoves; i++) {
      score -= (moves - faireMoves)/ i * diffLevel
    }
  }
 
  return Math.round(baseScore);
};
