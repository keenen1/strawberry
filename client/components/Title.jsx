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

    <div className={classes.root}>
      <Typography variant="h1" component="h2" gutterBottom>
        Spotify Track Sliders
      </Typography>
    </div>
  )
}

export default Title
