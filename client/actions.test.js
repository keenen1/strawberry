import { addDanceability } from './actions'

describe('addDanceability', () => {
  it('returns a value of danceability', () => {
    const action = addDanceability('0.5')
    expect(action.type).toBe('ADD_DANCE')
    expect(action.value).toBe('0.5')'
  })
})
