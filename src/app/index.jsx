import React from 'react'
import {render} from 'react-dom'
import ComponentTest from './ComponentTest/index.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <p> Hello React!</p>
        <ComponentTest />
      </div>
    )
  }
}

render(<App/>, document.getElementById('app'))