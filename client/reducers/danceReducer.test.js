import danceReducer from './danceReducer'

describe('danceReducer', () => {
  it('adds value of danceability to state', () => {
    const action = {
      type: 'ADD_DANCE',
      danceValue: '0.5'
    }

    const newState = danceReducer(undefined, action)

    expect(newState.danceValue).toMatch('0.5')
  }
  )
})
