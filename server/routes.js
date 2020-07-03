const express = require('express')
const request = require('superagent')

const router = express.Router()

const spotifyUrl = 'https://api.spotify.com/v1/search?q=grimes&type=artist'
const data = require('./data')

// router.get('/', (req, res) => {
//   request
//     .get(`${spotifyUrl}`)
//     .set('Accept', 'application/json')
//     .set('Content-Type', 'application/json')
//     .set('Authorization', `Bearer BQAHiyYY_PHTZi8vsF6kwuz0DrcngFn68EyRzNEQtfDQilTcEN-nUyvR-j_mOhFvip6mIqVeB9KUhZ6klqwlwn3k_bBRkQ5QSUO3QJurzSoiOS3O78fxBqzoPix4KIt8WoZn7AvEehUXqBM`)
//     .then(response => {
//       console.log('server-side: ', response.body.artist)
//       res.json(response.body.artist)
//     })
// })

router.get('/', (req, res) => {
//   console.log(data)
  res.json(data)
})

module.exports = router

// module.exports = router
