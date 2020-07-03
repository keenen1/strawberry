import React from 'react'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
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
        <Typography variant="h3" component="h4" gutterBottom>
          Results
        </Typography>

        <table>
          <thead>
            <tr>
              <td>Song</td>
              <td>Artist</td>
              <td>Tempo</td>
            </tr>
          </thead>
          <tbody>
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
      </div>
    )
  }
}

export default Results
