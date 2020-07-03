const initialDanceState = {
  danceability_value: 0
}

const danceReducer = (state = initialDanceState, action) => {
  switch (action.type) {
    case 'ADD_DANCE':
      return {
        danceability_value: action.danceability_value
      }
    default:
      return state
  }
}

export default danceReducer
