export function addDanceability (danceValue) {
  return {
    type: 'ADD_DANCE',
    danceValue
  }
}

// this function called from the component that the change occured
// the type is used for the reducer to 'know' what to do
