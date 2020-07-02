import React from 'react'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
import { makeStyles, withStyles } from '@material-ui/core/styles'

// Import material UI slider module
import { Slider } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    height: 300
  }
})

function valuetext (value) {
  return `${value}`
}

const marks = [
  {
    value: 0,
    label: '0'
  },
  // {
  //   value: 0.5,
  //   label: '0.5'
  // },
  {
    value: 1,
    label: '1'
  }
]

const Tempo = () => {
  const classes = useStyles()

  return (
    <>
      <Typography id="vertical-slider" gutterBottom>
      Danceability
      </Typography>
      <div className={classes.root}>
        <Slider
          orientation="vertical"
          defaultValue={[0.5]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
          valueLabelDisplay="on"
          // To define handleChange
          // onChange={handleChange}
          min={0}
          step={0.1}
          max={1}
        />
      </div>
    </>
  )
}

export default Tempo
