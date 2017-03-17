'use strict'
import React from 'react'
import { shallow, mount, render } from 'enzyme' // eslint-disable-line
import Navbar from '../../../src/app/navbar/Navbar.js'

describe('Given Navbar component', () => {
  let wrapper
  describe('When the component is mounted', () => {
    beforeEach(() => {
      wrapper = mount(<Navbar />)
    })
    it('Then it should return a div', () => {
      expect(wrapper.find('div')).to.have.length(1)
    })
  })
  describe('When the Links are rendered', () => {
    let links
    beforeEach(() => {
      wrapper = mount(<Navbar />)
      links = wrapper.find('IndexLink')
    })
    it('Then there should be 5 Link elements', () => {
      expect(links).to.have.length(5)
    })
    it('Then the "Home" Link routes to "/"', () => {
      expect(links.nodes[0].props.children).to.equal('Home')
      expect(links.nodes[0].props.to).to.equal('/')
    })
    it('Then the "Address" routes to "/address"', () => {
      expect(links.nodes[1].props.children).to.equal('Address')
      expect(links.nodes[1].props.to).to.equal('/address')
    })
    it('Then the "About" routes to "/about"', () => {
      expect(links.nodes[2].props.children).to.equal('About')
      expect(links.nodes[2].props.to).to.equal('/about')
    })
    it('Then the "Named Components" routes to "/namedComponent"', () => {
      expect(links.nodes[3].props.children).to.equal('Named Components')
      expect(links.nodes[3].props.to).to.equal('/namedComponent')
    })
    it('Then the "Route Query" routes to "/address/query"', () => {
      expect(links.nodes[4].props.children).to.equal('Route Query')
      expect(links.nodes[4].props.to).to.be.instanceOf(Object)
      expect(links.nodes[4].props.to.pathname).to.equal('/address/query')
    })
  })
})
