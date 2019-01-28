import { IncomingMessage, ServerResponse, createServer } from "http";
import URL from "url";
import fetch from "node-fetch";

const handler = async (req: IncomingMessage, res: ServerResponse) => {
  const url = URL.parse(req.url || "", true);

  if (!(url.pathname || "").includes("proxy")) {
    res.writeHead(400, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Please send a valid proxy request" }));
    return;
  }

  const endpoint = (url.pathname || "").replace(/\/proxy\//, "") + url.search;

  res.writeHead(200, {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*"
  });
  res.end(JSON.stringify(await fetchData(endpoint)));
};

async function fetchData(endpoint: string) {
  const url = `https://games.crossfit.com/competitions/api/v1/competitions/open/${endpoint}`;

  console.log(`[proxy] fetching ${url}`);

  const response = await fetch(url);

  return response.json();
}

if (!process.env.IS_NOW) {
  const port = 3001;
  createServer(handler).listen(port);
  console.log(`[Proxy] dev server started at http://localhost:${port}`);
}

export default handler;
