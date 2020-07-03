import danceReducer from './danceReducer'

describe('danceReducer', () => {
  it('adds value of danceability to state', () => {
    const state = {
      danceability_value: 0
    }

    const action = {
      type: 'ADD_DANCE',
      danceability_value: '0.5'
    }

    const newState = danceReducer(state, action)

    expect(newState.danceability_value).toBe('0.5')
  }
  )
})
