import React, { Component } from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Container, Home, About, NotFound } from './pages/Pages.js'
import { Address, TwitterFeed, Instagram, Query } from './pages/Address'
import { Title, SubTitle, NamedComponents } from './pages/NamedComponent'

class App extends Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={Container}>
          <IndexRoute component={Home} />
          <Route path='address' component={Address}>
            <IndexRoute component={TwitterFeed} />
            <Route path='instagram' component={Instagram} />
            <Route path='query' component={Query} />
          </Route>
          <Route path='/about(/:name)' component={About} />
          <Route path='/namedComponent' component={NamedComponents}>
            <IndexRoute components={{title: Title, subTitle: SubTitle}} />
          </Route>
          <Route path='*' component={NotFound} />
        </Route>

      </Router>
    )
  }
}
export default App
