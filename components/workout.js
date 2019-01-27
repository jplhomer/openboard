export default ({ workout, workoutLabel }) => {
  return (
    <>
      <div>
        <img src={workout.media_preview[0].url} alt={workoutLabel} />
        <div
          className="workout-details"
          dangerouslySetInnerHTML={{
            __html: workout.athleteWorkout.steps
          }}
        />
      </div>
      <style jsx>{`
        .workout-details {
          font-size: 0.8em;
        }

        .workout-details :global(p:last-child) {
          margin-bottom: 0;
        }
      `}</style>
    </>
  );
};
