'use strict'
import React from 'react'
import { shallow, mount, render } from 'enzyme' // eslint-disable-line
import Address from '../../../src/app/pages/Address.js'

describe('Given the Address component', () => {
  let wrapper
  describe('When the Address component is called', () => {
    beforeEach(() => {
      wrapper = shallow(<Address.Address />)
    })
    it('Then it should return a parant div', () => {
      expect(wrapper.nodes[0].type).to.equal('div')
    })
    it('Then should have 2 Link components', () => {
      expect(wrapper.find('Link')).to.have.length(2)
    })
    it('Then should have a h1 tag with the correct text', () => {
      expect(wrapper.find('h1')).to.have.length(1)
      let h1Text = 'We are located at 555 Jackson St.'
      expect(wrapper.find('h1').text()).to.equal(h1Text)
    })
  })
  describe('When the TwitterFeed component is called', () => {
    beforeEach(() => {
      wrapper = shallow(<Address.TwitterFeed />)
    })
    it('Then it should return a h3 component with the correct text', () => {
      expect(wrapper.nodes[0].type).to.equal('h3')
      let h3Text = 'Twitter Feed'
      expect(wrapper.find('h3').text()).to.equal(h3Text)
    })
  })
  describe('When the TwitterFeed component is called', () => {
    beforeEach(() => {
      wrapper = shallow(<Address.Instagram />)
    })
    it('Then it should return a h3 component with the correct text', () => {
      expect(wrapper.nodes[0].type).to.equal('h3')
      let h3Text = 'Instagram Feed'
      expect(wrapper.find('h3').text()).to.equal(h3Text)
    })
  })
  describe('When the Query component is called', () => {
    let location = {query: {message: 'Query Feed'}}
    beforeEach(() => {
      wrapper = shallow(<Address.Query location={location} />)
    })
    it('Then it should return a h2 component with the correct text', () => {
      expect(wrapper.nodes[0].type).to.equal('h2')
      let h2Text = 'Query Feed'
      expect(wrapper.find('h2').text()).to.equal(h2Text)
    })
  })
})
