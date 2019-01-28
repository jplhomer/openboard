import fetch from "isomorphic-fetch";

export async function fetchData(endpoint) {
  const proxy = `https://openboard.now.sh/proxy/`;

  // TODO: Find way to use local proxy while also supporting production deployments
  // const proxy = isProduction
  //   ? `https://openboard.now.sh/proxy/`
  //   : `http://localhost:3001/proxy/`;

  return await fetch(proxy + endpoint);
}
