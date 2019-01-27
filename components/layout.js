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
      `}</style>
      {children}
    </div>
  );
};
