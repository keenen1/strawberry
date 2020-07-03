const initialDanceState = {
  danceValue: 0
}

const danceReducer = (state = initialDanceState, action) => {
  switch (action.type) {
    case 'ADD_DANCE':
      return {
        danceValue: action.danceValue
      }
    default:
      return state
  }
}

export default danceReducer
