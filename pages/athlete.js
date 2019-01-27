import { fetchAthletePerformance } from "../lib/athletes";
import { fetchWorkouts } from "../lib/workouts";
import Score from "../components/Score";
import Layout from "../components/Layout";
import FindAthlete from "../components/FindAthlete";
import { fetchMetadataForYear } from "../lib/meta";
import YearNav from "../components/YearNav";

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
      <Layout>
        <div className="nav-bar">
          <YearNav year={year} />
          <FindAthlete />
        </div>

        <div className="user-header">
          <img
            src={`https://profilepicsbucket.crossfit.com/${
              athlete.profilePicS3key
            }`}
            alt={athlete.competitorName}
          />
          <h1>{athlete.competitorName}</h1>
        </div>

        {scores.map(score => {
          return (
            <div className="score" key={score.ordinal}>
              <Score
                score={score}
                athlete={athlete}
                meta={meta}
                workouts={workouts}
              />
            </div>
          );
        })}

        <style jsx>{`
          .nav-bar {
            display: flex;
            justify-content: space-between;
          }

          .user-header {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .user-header img {
            width: 70px;
            height: 70px;
            border-radius: 100%;
          }

          .user-header h1 {
            margin-left: 1rem;
          }

          .score {
            margin-bottom: 2rem;
          }
        `}</style>
      </Layout>
    );
  }
}
