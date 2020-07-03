import React from 'react'

import '@testing-library/jest-dom'
import Results from './Results'
import { render, screen } from '@testing-library/react'

test('shows track name from songs', () => {
  render(<Results />)
  expect(screen.queryByText('Song')).toBeInTheDocument()

  screen.findAllByRole('td').then(songs => {
    expect(songs.length).toBe(15)
    // done()
  })
    .catch(err => new Error(err))
})
