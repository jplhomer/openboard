import { fetchData } from "./fetch";

export async function fetchAthletePerformance(athleteId, year) {
  const response = await fetchData(`${year}/leaderboards?athlete=${athleteId}`);
  let data = await response.json();

  // TODO: Get division ahead of time. This is us trying again with the female division
  // if the first one failed :eyeroll:
  if (data.statusCode && data.statusCode === 408) {
    const response = await fetchData(
      `${year}/leaderboards?athlete=${athleteId}&division=2`
    );
    data = await response.json();
  }

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
