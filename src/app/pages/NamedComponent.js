import React from 'react'

const NamedComponent = (props) => (
  <div>
    {props.title}<br />
    {props.subTitle}
  </div>
)

const Title = () => (
  <h1>Hello from Title Component</h1>
)
const SubTitle = () => (
  <h1>Hello from SubTitle Component</h1>
)

module.exports = { NamedComponent, Title, SubTitle }
