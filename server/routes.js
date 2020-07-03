const express = require('express')
const request = require('superagent')

const router = express.Router()

const spotifyUrl = 'https://api.spotify.com/v1/search?q=grimes&type=artist'
const data = require('./data')

router.get('/', (req, res) => {
  request
    .get(`${spotifyUrl}`)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer BQCk7UWuP-Nu00u8v7ybMZBXpWmr6Of_ekXoPV0ozR2WiPC7CgFopVPsasDc34xZliZUhHu_jYRlxGRkrQ4Yk6Ju6zR4LDhZ3qau64KRxZ7-X8M5hUDLDHNimGtKH5o4gUzxS__-qOqc0V0`)
    .then(response => {
      console.log('server-side: ', response.body.artists.items)
      res.json(response.body.artists.items)
    })
})

router.get('/', (req, res) => {
//   console.log(data)
  res.json(data)
})

module.exports = router
