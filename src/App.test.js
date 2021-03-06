/* global it, describe */
import React from 'react'
import App from './App'
import { BrowserRouter, Route } from 'react-router-dom'
import configureMockStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { render } from 'enzyme'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('App', () => {
  it('renders without crashing', () => {
    fetch.mockResponse(JSON.stringify([]))

    const div = document.createElement('div')
    render((
      <Provider store={mockStore({ photos: [] })}>
        <BrowserRouter>
          <Route path='/' component={App} />
        </BrowserRouter>
      </Provider>
    ), div)
  })
})
