import request from 'superagent'

const serverUrl = 'http://localhost:3000/api/v1'

export function getSpotifyData () {
  return request
    .get(serverUrl)
    .then(response => {
      console.log('client-side api.js: ', response.body['audio_features'])
      return response.body['audio_features']
    })
}
