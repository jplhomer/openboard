import FindAthlete from "../components/FindAthlete";
import Layout from "../components/Layout";

export default () => (
  <Layout>
    <div className="box">
      <h1>Openboard</h1>
      <p>View an athlete's score from the 2018 CrossFit Games.</p>
      <div className="find-athlete">
        <FindAthlete />
      </div>
      <p>
        <small>
          <em>More years coming soon!</em>
        </small>
      </p>
    </div>
    <style jsx>{`
      h1 {
        font-size: 2em;
      }

      .box {
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
      }

      .find-athlete {
        font-size: 1.5em;
        text-align: left;
        margin-bottom: 1em;
        display: flex;
        justify-content: center;
      }

      @media (min-width: 500px) {
        h1 {
          font-size: 4em;
        }
      }
    `}</style>
  </Layout>
);
