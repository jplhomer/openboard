import fetch from "isomorphic-fetch";

import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

export async function fetchData(endpoint) {
  const proxy = publicRuntimeConfig.isProduction
    ? `https://openboard.now.sh/proxy/`
    : `http://localhost:3001/proxy/`;

  return await fetch(proxy + endpoint);
}
