const request = require('supertest')

const server = require('./server')

test('all is good', () => {
  expect(true).toBeTruthy()
})

test('GET / returns data', (done) => {
  request(server)
    .get('/api/v1/')
    .expect(200)
    .then(res => {
      // console.log(res.body)
      expect(res.body.audio_features.length).toBe(15)
      expect(res.body.audio_features[0].track_name).toMatch('Too Late')
      expect(res.body.audio_features[1].danceability).toBe(0.638)
      expect(res.body.audio_features[2].energy).toBe(0.51)
      expect(res.body.audio_features[3].key).toBe(11)

    
    })
  done()
})
