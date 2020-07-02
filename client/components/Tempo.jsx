import React from 'react'

// Import material UI font modules
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

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
  {
    value: 0.5,
    label: '0.5'
  },
  {
    value: 1,
    label: '1'
  }
]
const Tempo = () => {
  const classes = useStyles()

  return (
    <React.Fragment>
      <Typography id="vertical-slider" gutterBottom>
        Tempo
      </Typography>
      <div className={classes.root}>

        <Slider
          orientation="vertical"
          defaultValue={[0, 1]}
          aria-labelledby="vertical-slider"
          getAriaValueText={valuetext}
          marks={marks}
        />
      </div>
    </React.Fragment>
  )
}

export default Tempo
