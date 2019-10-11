import Link from "next/link";
import { withRouter } from "next/router";

const MIN_YEAR = 2018;
const MAX_YEAR = 2020;

export default withRouter(({ year, router }) => {
  return (
    <div className="container">
      {year > MIN_YEAR && (
        <Link
          href={{
            pathname: "/athlete",
            query: {
              ...router.query,
              year: parseInt(year) - 1
            }
          }}
        >
          <a>←</a>
        </Link>
      )}
      <span>{year}</span>
      {year < MAX_YEAR && (
        <Link
          href={{
            pathname: "/athlete",
            query: {
              ...router.query,
              year: parseInt(year) + 1
            }
          }}
        >
          <a>→</a>
        </Link>
      )}
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
          color: inherit;
          text-decoration: none;
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
});
