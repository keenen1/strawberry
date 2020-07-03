import React from 'react'

import '@testing-library/jest-dom'
import { createStore } from 'redux'
import { render, fireEvent, screen } from './test-utils'
import '@testing-library/jest-dom/extend-expect'
import Results from './Results'

test('shows track name from songs', () => {
  render(<Results />)
  expect(screen.queryByText('Song')).toBeInTheDocument()

  screen.findAllByRole('td').then(songs => {
    expect(songs.length).toBe(15)
    // done()
  })
    .catch(err => new Error(err))
})
