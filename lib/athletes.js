import { fetchData } from "./fetch";

export async function fetchAthletePerformance(athleteId, year) {
  const response = await fetchData(`${year}/leaderboards?athlete=${athleteId}`);
  const data = await response.json();

  return data.leaderboardRows.find(e => e.entrant.competitorId === athleteId);

  // TODO: Normalize data for each year :sob:
  // if (year === 2017) {
  //   const performance = data.athletes.find(e => e.userId === athleteId);
  //   return {
  //     entrant: {

  //     },
  //     scores: {

  //     }
  //   }
  // }
}
