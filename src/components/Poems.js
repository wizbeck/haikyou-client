import React, { Component } from 'react'
import {connect} from 'react-redux';
import Poem from './Poem'

class Poems extends Component {
  constructor() {
    super();
    this.state = {
      ...this.props,
      search: ''
    }
  }

  updateSearch = e => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
    
  }
  render() {
    const filteredPoems = this.props.poems.filter((poem) => {
      return poem.author.toLowerCase().includes(this.state.search.toLowerCase())
    });
    const poems = filteredPoems.map((poem, i) => <Poem key={i} title={poem.title} line_1={poem.line_1} line_2={poem.line_2} line_3={poem.line_3} author={poem.author}/>);
    return (
      <div className="poems-container">
        <input type="text" className="search" name="search" placeholder="search by author" onChange={this.updateSearch} value={this.state.search}/>
        { poems }
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    poems: state.poems
  }
}

export default connect(mapStateToProps)(Poems);
