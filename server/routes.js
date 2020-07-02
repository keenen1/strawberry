const express = require('express')
const request = require('superagent')

const router = express.Router()

const spotifyUrl = "https://api.spotify.com/v1/search"

router.get('/', (req, res) => {
    request
        .get(`${spotifyUrl}`)
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json')
        .set('Authorization', `Bearer BQANu2EWW7VwpL5HAZTrhheqs1B7w7SmpGcJmX3OJ9G-LJfc5S0mIoyJPOyBJ61IFTorTNTYu7YmoBUv_lFsKwl4fGDiEfRHVeO1bi8yFT9OH1WwRJH4P1Fm-GHmG4z6JumVajDGmUmjRXo`)
        .then(reponse => {
            console.log('server-side: ', response.body)
        })
})