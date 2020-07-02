import React from 'react'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import { getSpotifyData } from '../api'

// const useStyles = makeStyles({
//   root: {
//     height: 300
//   }
// })
// const classes = useStyles()

class Results extends React.Component {
  state = {
    songs: []
  }

  // useStyles = () => makeStyles({
  //   root: {
  //     height: 300
  //   }
  // })

  // classes = useStyles()

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
        <ul>
          {
            this.state.songs.map(song => {
              return <li key={song.id}>
                {song['track_name']}
              </li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default Results
