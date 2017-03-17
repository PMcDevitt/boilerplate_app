'use strict'
import React from 'react'
import { Link } from 'react-router'

const Address = (props) => <div>
  <br />
  <Link to='/address'>Twitter Feed</Link>&nbsp;
  <Link to='/address/instagram'>Instagram Feed</Link>
  <h1>We are located at 555 Jackson St.</h1>
  {props.children}
</div>

const TwitterFeed = () => <h3>Twitter Feed</h3>
const Instagram = () => <h3>Instagram Feed</h3>
const Query = (props) => (
  <h2>{props.location.query.message}</h2>
)
module.exports = {Address, TwitterFeed, Instagram, Query}
