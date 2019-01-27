export default ({ children }) => {
  return (
    <div className="wrapper">
      <style global jsx>{`
        @import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700,700i");
        body,
        html {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: "Source Sans Pro", sans-serif;
          line-height: 1.5;
        }

        html *,
        html *::before,
        html *::after {
          box-sizing: inherit;
        }

        .wrapper {
          max-width: 800px;
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
