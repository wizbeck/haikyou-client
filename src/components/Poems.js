import React, { Component } from 'react'
import {connect} from 'react-redux';
import Poem from './Poem'

class Poems extends Component {
  render() {
    const poems = this.props.poems.map((poem, i) => <Poem key={i} title={poem.title} line_1={poem.line_1} line_2={poem.line_2} line_3={poem.line_3} author={poem.author} likes={poem.likes}/>);
    return (
      <div>
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
