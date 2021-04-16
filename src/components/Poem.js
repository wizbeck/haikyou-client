import React, { Component } from 'react'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';



class Poem extends Component {
  
    // add a like to total likes
    // dispatch action fetch request post to `http://localhost:3000/poems/${id}`
    // update state of individual poem when clicking
  
handleLikes = () => {
  this.props.addLike(this.props.id, this.props.likes)
}

  render() {
    const poem = this.props
    return (
      <div className="poem">
        <h3>{ poem.title }</h3>
        <p>{'"'}{ poem.line_1 }</p>
        <p>{ poem.line_2 }</p>
        <p>{ poem.line_3 }{'"'}</p>
        <span> - <em>{ poem.author }</em></span>
        <br />
        <span className="poem__likes"><ThumbUpAltIcon onClick={this.handleLikes}/> {poem.likes} </span>
      </div>
    )
  }
}



export default Poem;
