import React from 'react'
import Nav from '../navbar/Navbar.js'

const Container = (props) => <div>
  <Nav />
  {props.children}
</div>

const Home = () => <h1>Hello from Home!</h1>

const About = (props) => (
  <div>
    <h3>Welcome to the About Page</h3>
    { props.params.name && <h2>Hello, {props.params.name}</h2>}
  </div>
)
const NotFound = () => (<h1>404.. This page is not found!</h1>)

module.exports = { Home, NotFound, Container, About }
