import React from 'react'

// Import material UI font modules
// import { makeStyles } from '@material-ui/core/styles'

import { getSpotifyData } from '../api'

class Results extends React.Component {
  state = {
    songs: []
  }

  componentDidMount () {
    getSpotifyData()
      .then(songsArr => {
        this.setState({
          songs: songsArr
        })
      })
  }

  render () {
    return (
      // <div className={this.classes.root}>
      <div className="">
        <div className="results">
          <p>Results</p>
        </div>
      

        <table>
          <thead className='tableHeaders'>
            <tr>
              <td>Songs</td>
              <td>Artists</td>
              <td>Tempo</td>
            </tr>
          </thead>
          <tbody className='tableBody'>
            {this.state.songs.map(song => {
              return <tr key={song.id}>
                <td>{song['track_name']}</td>
                <td>{song['artist']}</td>
                <td>{song['tempo']}</td>
              </tr>
            })}
          </tbody>
        </table>

        {/* <ul>
          {
            this.state.songs.map(song => {
              return <li key={song.id}>
                {song['track_name']}
              </li>
            })
          }
        </ul> */}
        <img src='./images/new4.png' />
      </div>
    )
  }
}

export default Results
