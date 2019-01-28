import { fetchData } from "./fetch";

export function getWorkoutLabelForScore(score, athlete, meta) {
  const ordinal = score.ordinal;
  const divisionId = athlete.divisionId;
  const division = getDivisionById(divisionId, meta);
  return division.controls[0].data.find(d => d.value === `${ordinal}`).display;
}

function getDivisionById(divisionId, meta) {
  return meta.divisions.find(division => division.value === divisionId);
}

function getDivisionNameForDivision(divisionId, meta) {
  const division = getDivisionById(divisionId, meta);
  return division.display;
}

export function getWorkoutForScore(score, workouts, athlete, meta) {
  // Get workout label
  const label = getWorkoutLabelForScore(score, athlete, meta);

  // Find workout that matches parseFloat(workout label)
  const workout = workouts.find(
    workout => workout.label === `${parseFloat(label)}`
  );

  // Get athlete division name
  const divisionName = getDivisionNameForDivision(athlete.divisionId, meta);

  const workoutType = score.scaled === "1" ? "scaled" : "rx";

  // Find workout description with a division whose label contains the division name
  return {
    ...workout,
    athleteWorkout: workout.workouts.find(
      w =>
        w.type === workoutType &&
        w.division.find(d => d.label.includes(divisionName))
    )
  };
}

export async function fetchWorkoutsForYear(year) {
  const response = await fetchData(`${year}/workouts`);
  return await response.json();
}
