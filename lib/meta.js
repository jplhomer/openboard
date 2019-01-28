import { fetchData } from "./fetch";

export async function fetchMetadataForYear(year) {
  const response = await fetchData(`${year}?expand[]=controls`);
  const data = await response.json();

  return {
    divisions: data.controls.find(c => c.name === "division").data
  };
}
