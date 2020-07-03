import React from 'react'
import { connect } from 'react-redux'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

// Import material UI slider module
import { Slider } from '@material-ui/core'

import { addDanceability } from '../actions'

const useStyles = makeStyles({
  root: {
    height: 300
  }
})

// This value is the new value in the slider.
function valuetext (value) {
  return `${value}`
}

const marks = [
  {
    value: 0,
    label: '0'
  },
  {
    value: 0.5,
    label: '0.5'
  },
  {
    value: 1,
    label: '1'
  }
]

const Danceability = ({ dispatch }) => {
  const classes = useStyles()

  return (
    <>
      <div className='slideTitle'>Danceability</div>

      <div className={classes.root}>
        <Slider
          orientation="vertical"
          defaultValue={[0.5]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
          valueLabelDisplay="on"
          onChange={(e) => handleChange(e, dispatch)}
          min={0}
          step={0.1}
          max={1}
        />
      </div>
    </>
  )
}

function handleChange (e, dispatch) {
  const danceValue = e.target.getAttribute('aria-valuetext')
  // console.log(danceValue)
  dispatch(addDanceability(danceValue))
}

export default connect()(Danceability)
