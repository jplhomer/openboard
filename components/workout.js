export default ({ workout, workoutLabel }) => {
  return (
    <div>
      <img src={workout.media_preview[0].url} alt={workoutLabel} />
      <div
        dangerouslySetInnerHTML={{
          __html: workout.athleteWorkout.steps
        }}
      />
      <div
        dangerouslySetInnerHTML={{
          __html: workout.workout_summary
        }}
      />
    </div>
  );
};
