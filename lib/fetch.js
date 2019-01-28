import fetch from "isomorphic-fetch";
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function fetchData(endpoint) {
  let { isProduction } = publicRuntimeConfig;

  // For some reason, publicRuntimeConfig does not get persisted to the client
  // like the docs say it does: https://nextjs.org/docs/#exposing-configuration-to-the-server--client-side
  // So we need to run a secondary check. If this method is running on the client,
  // we run a quick check for the window location. If it's running on the server, it *should* be accurate.
  if (!isProduction && typeof window !== "undefined") {
    isProduction = window.location.href.includes("now.sh");
  }

  const proxy = isProduction
    ? `https://openboard.now.sh/proxy/`
    : `http://localhost:3001/proxy/`;

  return await fetch(proxy + endpoint);
}
