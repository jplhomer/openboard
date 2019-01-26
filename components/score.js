import { getWorkoutLabelForScore } from "../lib/workouts";

export default ({ score, athlete, meta, workouts }) => {
  const matchingWorkout = workouts.find(w => w.index === score.ordinal);

  return (
    <div>
      <h3>#{getWorkoutLabelForScore(score, athlete, meta)}: {score.scoreDisplay}</h3>
      <p>{score.scaled === "1" ? "Scaled" : "Rx"}</p>
      <p>{score.breakdown}</p>
      <p>Rank: {score.rank}</p>
    </div>
  )
}
