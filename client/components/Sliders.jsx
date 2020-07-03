import React from 'react'

import Danceability from './Danceability'

import data from '../../server/data'

const Sliders = ({ dispatch }) => {
  return (
    <>
    <div className="sliders">
      <Danceability />
    </div>
    </>
  )
}

export default Sliders
