/* global it, describe */
import React from 'react'
import { render } from 'enzyme'
import Gallery from './Gallery'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Gallery', () => {
  it('renders without crashing', () => {
    fetch.mockResponse(JSON.stringify([]))

    const div = document.createElement('div')
    render((
      <Provider store={mockStore({ photos: [] })}>
        <Gallery />
      </Provider>
    ), div)
  })
})
