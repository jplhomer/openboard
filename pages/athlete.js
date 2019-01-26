import { fetchAthletePerformance } from "../lib/data";

export default class Athlete extends React.Component {
  static async getInitialProps({ query }) {
    const { id } = query;
    const { year } = query;
    const performance = await fetchAthletePerformance(id, year || (new Date()).getYear());

    return {
      athlete: performance.entrant,
      scores: performance.scores
    }
  }

  render() {
    const { athlete } = this.props;
    return (
      <div>
        <h1>{athlete.competitorName}</h1>
        <img src={`https://profilepicsbucket.crossfit.com/${athlete.profilePicS3key}`} alt={athlete.competitorName} />
      </div>
    );
  }
}
