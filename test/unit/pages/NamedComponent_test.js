'use strict'
import React from 'react'
import { shallow, mount, render } from 'enzyme' // eslint-disable-line
import File from '../../../src/app/pages/NamedComponent.js'

describe('Given the NamedComponent component', () => {
  let wrapper
  describe('When the NamedComponent component is called', () => {
    beforeEach(() => {
      wrapper = shallow(<File.NamedComponent />)
    })
    it('Then it should return a parant div', () => {
      expect(wrapper.nodes[0].type).to.equal('div')
    })
  })
  describe('When the Title component is called', () => {
    beforeEach(() => {
      wrapper = shallow(<File.Title />)
    })
    it('Then it should return a h1 component with the correct text', () => {
      expect(wrapper.nodes[0].type).to.equal('h1')
      let h1Text = 'Hello from Title Component'
      expect(wrapper.find('h1').text()).to.equal(h1Text)
    })
  })
  describe('When the SubTitle component is called', () => {
    beforeEach(() => {
      wrapper = shallow(<File.SubTitle />)
    })
    it('Then it should return a h3 component with the correct text', () => {
      expect(wrapper.nodes[0].type).to.equal('h1')
      let h1Text = 'Hello from SubTitle Component'
      expect(wrapper.find('h1').text()).to.equal(h1Text)
    })
  })
})
