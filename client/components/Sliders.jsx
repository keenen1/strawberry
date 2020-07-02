import React from 'react'
import { Button } from '@material-ui/core'

import Danceability from './Danceability'

// handleChangeButton = (e) => {
//   alert(e.target.value)
//   this.props.setFieldValue('degreeLevel', e.target.value)
// }

const Sliders = () => {
  return (
    <>
    <div className="sliders">
      <Danceability />
    </div>
      <div>
        <Button variant="outlined" color="primary" disableElevation onClick={() => {console.log('Run button clicked!') }}>
          Run
        </Button>
      </div>
    </>
  )
}

export default Sliders
