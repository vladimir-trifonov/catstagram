/* global it, expect, describe */
import React from 'react'
import HomeView from './HomeView'
import { shallow } from 'enzyme'

describe('HomeView', () => {
  it('should render an `Gallery`', () => {
    const wrapper = shallow(<HomeView />)
    expect(wrapper).to.be.present()
  })
})
