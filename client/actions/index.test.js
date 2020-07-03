import { addDanceability } from './index'

describe('addDanceability', () => {
  it('returns a value of danceability', () => {
    const action = addDanceability(0.5)
    expect(action.type).toMatch('ADD_DANCE')
    expect(action.value).toBe(0.5)
  })
})
