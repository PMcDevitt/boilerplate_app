'use strict'
import React from 'react'
import { shallow, mount, render } from 'enzyme' // eslint-disable-line
import Pages from '../../../src/app/pages/Pages.js'

describe.only('Given the Page file', () => {
  let wrapper
  describe('When the Container component is called', () => {
    beforeEach(() => {
      wrapper = mount(<Pages.Container />)
    })
    it('Then it should contain a div element', () => {
      expect(wrapper.find('div')).to.have.length.above(0)
    })
    it('Then it should contain the Navbar component', () => {
      expect(wrapper.find('Navbar')).to.have.length(1)
    })
  })
  describe('When the Container component is called', () => {
    beforeEach(() => {
      wrapper = mount(<Pages.Home />)
    })
    it('Then it should contain a h1 element with the correct text', () => {
      let h1 = wrapper.find('h1')
      expect(h1).to.have.length(1)
      expect(h1.text()).to.equal('Hello from Home!')
    })
  })
  describe('When the About component is called', () => {
    beforeEach(() => {
      wrapper = mount(<Pages.About params={{name: 'Tom'}} />)
    })
    it('Then it should contain a div element', () => {
      expect(wrapper.find('div')).to.have.length(1)
    })
    it('Then it should contain a h3 element with the correct text', () => {
      let h3 = wrapper.find('h3')
      expect(h3).to.have.length(1)
      expect(h3.text()).to.equal('Welcome to the About Page')
    })
    it('Then it should contain a h3 with the correct text with the "name" prop', () => {
      expect(wrapper.props().params.name).to.equal('Tom')
      let h2 = wrapper.find('h2')
      expect(h2).to.have.length(1)
      expect(h2.text()).to.equal('Hello, Tom')
      wrapper = mount(<Pages.About params={{name: 'Billy'}} />)
      h2 = wrapper.find('h2')
      expect(h2.text()).to.equal('Hello, Billy')
    })
  })
  describe('When the NotFound component is called', () => {
    beforeEach(() => {
      wrapper = mount(<Pages.NotFound />)
    })
    it('Then it should contain a h1 element with the correct text', () => {
      let h1 = wrapper.find('h1')
      expect(h1).to.have.length(1)
      expect(h1.text()).to.equal('404.. This page is not found!')
    })
  })
})
