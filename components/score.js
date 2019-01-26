import { getWorkoutLabelForScore, getWorkoutForScore } from "../lib/workouts";

export default ({ score, athlete, meta, workouts }) => {
  const workout = getWorkoutForScore(score, workouts, athlete, meta);
  const workoutLabel = getWorkoutLabelForScore(score, athlete, meta);

  return (
    <div>
      <h3>{workoutLabel}: {score.scoreDisplay}</h3>
      <p>{score.scaled === "1" ? "Scaled" : "Rx"}</p>
      <p>{score.breakdown}</p>
      <p>Rank: {score.rank}</p>

      <h4>Workout Steps:</h4>
      <div dangerouslySetInnerHTML={{
        __html: workout.athleteWorkout.steps
      }} />
    </div>
  )
}
