import React from 'react'
import { connect } from 'react-redux'

import { getSpotifyData } from '../api'

import data from '../../server/data'

const Results = ({ danceReducer }) => {
  const songs = data['audio_features']
  return (
    <div className="">
      <table>
        <thead className='tableHeaders'>
          <tr>
            <td>Songs</td>
            <td>Artists</td>
            <td>Danceability</td>
          </tr>
        </thead>
        <tbody className='tableBody'>
          {songs.map(song => {
            if (song['danceability'] <= danceReducer) {
              return <tr key={song.id}>
                <td>{song['track_name']}</td>
                <td>{song['artist']}</td>
                <td>{song['danceability']}</td>
              </tr>
            }
          })}
        </tbody>
      </table>
      <>
        <img src='./images/new4.png' />
      </>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    danceReducer: state.danceReducer['danceValue']
  }
}
//this is where we call our items from the STORE using the name

export default connect(mapStateToProps)(Results)
