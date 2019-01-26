import { fetchAthletePerformance } from "../lib/athletes";
import { fetchWorkouts } from "../lib/workouts";
import Score from "../components/score"

export default class Athlete extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    let { year } = query;
    year = year || 2018;
    const performance = await fetchAthletePerformance(id, year);
    const workouts = await fetchWorkouts();

    return {
      year,
      athlete: performance.entrant,
      scores: performance.scores,
      workouts
    }
  }

  render() {
    const { athlete, scores, year, workouts } = this.props;
    return (
      <div>
        <h1>{athlete.competitorName}: {year}</h1>
        <img src={`https://profilepicsbucket.crossfit.com/${athlete.profilePicS3key}`} alt={athlete.competitorName} />

        <h2>Scores</h2>
        {scores.map(score => {
          return <Score score={score} workouts={workouts} key={score.ordinal} />
        })}
      </div>
    );
  }
}
