import { fetchAthletePerformance } from "../lib/athletes";
import { fetchWorkoutsForYear } from "../lib/workouts";
import Score from "../components/Score";
import Layout from "../components/Layout";
import FindAthlete from "../components/FindAthlete";
import { fetchMetadataForYear } from "../lib/meta";
import YearNav from "../components/YearNav";
import Error from "next/error";
import Head from "next/head";

export default class Athlete extends React.Component {
  static async getInitialProps({ query, res }) {
    const { id } = query;

    if (!id && res) {
      res.statusCode = 404;
    }

    const { year = 2019 } = query;

    const performance = await fetchAthletePerformance(id, year);
    const workouts = await fetchWorkoutsForYear(year);
    const meta = await fetchMetadataForYear(year);

    return {
      year,
      athlete: performance ? performance.entrant : null,
      scores: performance ? performance.scores : null,
      workouts,
      meta
    };
  }

  render() {
    const { athlete, scores, year, workouts, meta } = this.props;
    if (!athlete) return <Error statusCode={404} status="Athlete not found" />;
    return (
      <Layout>
        <Head>
          <title>{athlete.competitorName}'s 2018 Open Stats - Openboard</title>
          <meta
            name="description"
            content={`View ${
              athlete.competitorName
            }'s 2018 CrossFit Open stats, including details for each workout.`}
          />
        </Head>
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
          <h1>
            {athlete.competitorName} - {year}
          </h1>
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
            margin: 1em 0;
          }

          .user-header img {
            width: 70px;
            height: 70px;
            border-radius: 100%;
          }

          .user-header h1 {
            margin-left: 1rem;
          }

          @media (max-width: 500px) {
            .user-header h1 {
              font-size: 1.5em;
            }
          }

          .score {
            margin-bottom: 2rem;
          }
        `}</style>
      </Layout>
    );
  }
}
