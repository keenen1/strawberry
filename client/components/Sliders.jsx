import React from 'react'
import { Button } from '@material-ui/core'

import Danceability from './Danceability'

// handleChangeButton = (e) => {
//   Click of the run button will dispatch the {value} to store and replace the console log below
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
