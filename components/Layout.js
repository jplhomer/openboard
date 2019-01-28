import Head from "next/head";

export default ({ children }) => {
  return (
    <div className="wrapper">
      <Head>
        <title>Openboard</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700,700i");
        body,
        html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Source Sans Pro", sans-serif;
          line-height: 1.5;
          background: #111;
          color: #efefef;
        }

        html *,
        html *::before,
        html *::after {
          box-sizing: inherit;
        }

        p,
        h2,
        h3,
        h4 {
          margin-top: 0;
        }

        .wrapper {
          max-width: 600px;
          margin: 0 auto;
          padding: 1rem;
        }

        img {
          height: auto;
          max-width: 100%;
        }

        footer {
          font-size: 0.8em;
          margin-top: 2em;
          padding-top: 2em;
          border-top: 1px solid #666;
          text-align: center;
        }

        footer a {
          color: #ccc;
        }
      `}</style>
      {children}
      <footer>
        <p>
          Built by <a href="https://twitter.com/jplhomer">Josh Larson</a> as a{" "}
          <a href="https://creative.jplhomer.org">creative project</a>.<br />
          View the{" "}
          <a href="https://github.com/jplhomer/openboard">code on GitHub</a>.
          <br />
          No affiliation with CrossFit Games. All photos property of CrossFit.
        </p>
      </footer>
    </div>
  );
};
