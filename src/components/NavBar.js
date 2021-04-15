import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">Home</Link>{' / '}
        <Link to="/about">About</Link>{' / '}
        <Link to="/haikus">All Haikus</Link>{' / '}
        <Link to="/haikus/new">New Haiku</Link>
      </div>
    )
  }
}

export default NavBar
