/* global it, describe */
import React from 'react'
import { render } from 'enzyme'
import Photo from './Photo'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Photo', () => {
  it('renders without crashing', () => {
    const photos = [{
      id: 'xx',
      path: '/',
      src: '/'
    }]
    fetch.mockResponse(JSON.stringify([]))

    const div = document.createElement('div')
    render((
      <Provider store={mockStore({ photos })}>
        <Photo id='xx' key='xx' />
      </Provider>
    ), div)
  })
})
