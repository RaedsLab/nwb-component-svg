import React, {Component} from 'react'
const threeDots = require('./3dots.svg') 

export default class extends Component {
  render() {
    return <div>
      <h2>Welcome to React components</h2>
      <img src={threeDots} />
    </div>
  }
}
