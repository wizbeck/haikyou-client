import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class NavBar extends Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/new">New Haiku</Link>
      </div>
    )
  }
}

export default NavBar
