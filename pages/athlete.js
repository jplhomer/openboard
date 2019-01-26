import { fetchAthletePerformance } from "../lib/athletes";
import { fetchWorkouts } from "../lib/workouts";
import Score from "../components/score";
import { fetchMetadataForYear } from "../lib/meta";

export default class Athlete extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    let { year } = query;
    year = year || 2018;
    const performance = await fetchAthletePerformance(id, year);
    const workouts = await fetchWorkouts();
    const meta = await fetchMetadataForYear(year);

    return {
      year,
      athlete: performance.entrant,
      scores: performance.scores,
      workouts,
      meta
    };
  }

  render() {
    const { athlete, scores, year, workouts, meta } = this.props;
    return (
      <div>
        <h1>
          {athlete.competitorName}: {year}
        </h1>
        <img
          src={`https://profilepicsbucket.crossfit.com/${
            athlete.profilePicS3key
          }`}
          alt={athlete.competitorName}
        />

        <h2>Scores</h2>
        {scores.map(score => {
          return (
            <Score
              score={score}
              athlete={athlete}
              meta={meta}
              workouts={workouts}
              key={score.ordinal}
            />
          );
        })}
      </div>
    );
  }
}
