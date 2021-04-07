import React, { Component } from 'react'

class Poem extends Component {
  render() {
    const {title, line_1, line_2, line_3, author, likes} = this.props

    return (
      <div>
        <h3>{ title }</h3>
        <p>{ line_1 }</p>
        <p>{ line_2 }</p>
        <p>{ line_3 }</p>
        <span> - { author }</span>
        {/* add likes later */}
      </div>
    )
  }
}

export default Poem;
