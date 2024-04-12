import IndexRoute, { meta } from '~/routes/_index'
import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'

test('should render index route', () => {
  render(<IndexRoute />)
  expect(screen.getByText('Welcome to Remix')).toBeInTheDocument()
})

test('should display meta of route', () => {
  const tags = meta({
    data: {},
    location: {
      hash: '',
      key: '',
      pathname: '',
      search: '',
      state: '',
    },
    params: {},
    matches: [],
  })
  expect(tags).toEqual([
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ])
})
