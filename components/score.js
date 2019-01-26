import { getWorkoutLabelForScore, getWorkoutForScore } from "../lib/workouts";

export default ({ score, athlete, meta, workouts }) => {
  const workout = getWorkoutForScore(score, workouts, athlete, meta);
  const workoutLabel = getWorkoutLabelForScore(score, athlete, meta);

  return (
    <div>
      <h3>{workoutLabel}: {score.scoreDisplay}</h3>
      <img src={workout.media_preview[0].url} alt={workoutLabel} />
      <p>{score.scaled === "1" ? "Scaled" : "Rx"}</p>
      <p>{score.breakdown}</p>
      <p>Rank: {score.rank}</p>

      <div dangerouslySetInnerHTML={{
        __html: workout.athleteWorkout.steps
      }} />
      <div dangerouslySetInnerHTML={{
        __html: workout.workout_summary
      }} />
    </div>
  )
}
