import fetch from "isomorphic-fetch";

export async function fetchData(endpoint) {
  const proxy = process.env.IS_NOW ? `/proxy/` : `http://localhost:3001/proxy/`;

  return await fetch(proxy + endpoint);
}
