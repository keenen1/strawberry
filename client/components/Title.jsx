import React from 'react'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 300
  }
})

const Title = () => {
  const classes = useStyles()
  return (
    <div>
      <div className={classes.root} id='title'>
        <Typography variant="h1" component="h2">
        Spotify Track Sliders
        </Typography>
      </div>
    </div>
  )
}

export default Title
