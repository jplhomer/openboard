import { getWorkoutLabelForScore, getWorkoutForScore } from "../lib/workouts";
import Workout from "./workout";

export default ({ score, athlete, meta, workouts }) => {
  const workout = getWorkoutForScore(score, workouts, athlete, meta);
  const workoutLabel = getWorkoutLabelForScore(score, athlete, meta);

  return (
    <>
      <div className="score-box">
        <div className="heading">
          <span>{workoutLabel}</span>
          <span>{score.scoreDisplay}</span>
        </div>
        <div className="workout">
          <Workout workout={workout} workoutLabel={workoutLabel} />
        </div>
        <div className="score">
          <p className="breakdown">{score.breakdown}</p>
          <p className="breakdown">{formattedNumber(score.rank)}</p>
          <p className="breakdown">{score.scaled === "1" ? "Scaled" : "Rx"}</p>

          <p>
            Judged by <b>{score.judge}</b> <br /> at <b>{score.affiliate}</b>
          </p>
        </div>
      </div>
      <style jsx>{`
        .score-box {
          display: flex;
          flex-flow: column nowrap;
        }

        .heading {
          flex-basis: 100%;
          display: flex;
          justify-content: space-between;
          text-transform: uppercase;
          font-weight: bold;
          font-size: 2em;
        }

        .score .breakdown {
          font-size: 1.3em;
          margin-bottom: 0.5em;
          line-height: 1.25;
        }

        @media (min-width: 500px) {
          .score-box {
            flex-flow: row wrap;
          }

          .score,
          .workout {
            flex-basis: 50%;
          }

          .score {
            padding-left: 1rem;
            text-align: right;
          }
        }
      `}</style>
    </>
  );
};

function formattedNumber(d) {
  const ordinal = numberWithOrdinal(d);

  return numberWithCommas(d) + ordinal;
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function numberWithOrdinal(d) {
  if (d > 3 && d < 21) return "th";
  switch (d % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
