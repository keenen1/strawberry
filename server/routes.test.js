const request = require('supertest')

const route = require('./routes')

test('all is good', () => {
  expect(true).toBeTruthy()
})

test('GET / returns data', (done) => {
  request(route)
    .get('/')
    .expect(200)
    .end((err, res) => {
      .expect(res.text).toMatch('h1')
      .expect(res.text).toMatch('nametest')
      .done()
    })
})
