import React from 'react'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    height: 300
  }
})

const Results = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant="h3" component="h4" gutterBottom>
      Results
      </Typography>
    </div>
  )
}

export default Results
