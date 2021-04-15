import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div className="about">
        <h1>About this website</h1>
        <p> Haikyou is a little webapp thought up to express the long lost art of haikus and their simple yet elegant nature of expression through a few lines and syllables.</p>
        <p> Please don't hesitate to share an expression of your self, or something on your mind in a beautiful wording on Haikyou!</p>
        <p>Click <Link to="/new">here</Link> to share or create a haiku on Haikyou!</p>
      </div>
    )
  }
}

export default About
