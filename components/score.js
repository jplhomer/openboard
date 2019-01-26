import { getWorkoutLabelForScore, getWorkoutForScore } from "../lib/workouts";
import Workout from "./workout";

export default ({ score, athlete, meta, workouts }) => {
  const workout = getWorkoutForScore(score, workouts, athlete, meta);
  const workoutLabel = getWorkoutLabelForScore(score, athlete, meta);

  return (
    <div>
      <h3>{workoutLabel}: {score.scoreDisplay}</h3>
      <p>{score.scaled === "1" ? "Scaled" : "Rx"}</p>
      <p>{score.breakdown}</p>
      <p>Rank: {score.rank}</p>

      <Workout workout={workout} workoutLabel={workoutLabel} />
    </div>
  )
}
