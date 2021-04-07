import React, { Component } from 'react'
import { connect } from 'react-redux';


class Form extends Component {
  state = {
    title: '',
    line_1: '',
    line_2: '',
    line_3: '',
    author: ''
  }




  handleOnChange = e => {
    this.setState({
      ...this.state,
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      title: '',
      line_1: '',
      line_2: '',
      line_3: '',
      author: ''
    })
  }


  render() {
    return (
      <div>
        <h3>Create your Haiku</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleOnChange} type="text" name="title" placeholder="enter title..." value={this.state.title}/>
          <br /><br />
          <input  onChange={this.handleOnChange} ype="text" name="line_1" placeholder="first line 5 syllables" value={this.state.line_1} />
          <br /><br />
          <input  onChange={this.handleOnChange} type="text" name="line_2" placeholder="second line 7 syllables" value={this.state.line_2} />
          <br /><br />
          <input  onChange={this.handleOnChange} type="text" name="line_3" placeholder="third line 5 syllables" value={this.state.line_3} />
          <br /><br />
          <input  onChange={this.handleOnChange} type="text" name="author" placeholder="your name" value={this.state.author}/>
          <br /><br />
          <input type="submit" value="Post it!" />
        </form>
      </div>
    )
  }
}

export default connect()(Form);
