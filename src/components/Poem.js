import React, { Component } from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
class Poem extends Component {

  handleClick = (id) => {
    // add a like to total likes
    // dispatch action fetch request post to `http://localhost:3000/${id}`
    // update state of individual poem when clicking
  }

  render() {
    const {id, title, line_1, line_2, line_3, author, likes} = this.props

    return (
      <div className="poem">
        <h3>{ title }</h3>
        <p>{'"'}{ line_1 }</p>
        <p>{ line_2 }</p>
        <p>{ line_3 }{'"'}</p>
        <span> - <em>{ author }</em></span>
        <br />
        <span className="poem__likes"><ThumbUpAltIcon onClick={this.handleClick(id)}/> {likes} </span>
      </div>
    )
  }
}

export default Poem;
