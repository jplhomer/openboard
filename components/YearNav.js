export default ({ year }) => {
  return (
    <div className="container">
      <a>←</a>
      <span>{year}</span>
      <a>→</a>
      <style jsx>{`
        .container {
          display: flex;
          align-items: stretch;
          overflow: hidden;
          border-radius: 5px;
        }

        a {
          padding: 0.15em 0.4em;
          background-color: #336699;
        }

        a:hover,
        a:active {
          background-color: #43aac9;
        }

        span {
          padding: 0.15em 0.5em;
          background-color: #444;
          flex: 1;
        }
      `}</style>
    </div>
  );
};
