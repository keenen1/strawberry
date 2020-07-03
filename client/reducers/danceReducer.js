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

//the reducer knows which action to do based on the type passed in at action
// the return value that is placed in the STORE AND NOW GLOBALLY ACCESSIBLE is
// called DANCEREDUCER and DANCEVALUE is needed to access it where we call it