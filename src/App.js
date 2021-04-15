import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import StickyFooter from './components/StickyFooter'
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Poems from './components/Poems';
import ErrorPage from './components/ErrorPage'
import { getPoems } from './actions'



class App extends Component {


  componentDidMount(){
    this.props.getPoems();
  }

  render() {

    if (this.props.loading) {
      return (
        <h2>Loading data...</h2>
      )
    }


    return (
      <Router>
        <Header />
        <NavBar />
        <div className="app">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about" component={ About } />
          <Route exact path="/haikus" component={ Poems } />
          <Route exact path="/haikus/new" component={ Form } />
          <Route component={ ErrorPage } />
        </Switch> 
        <StickyFooter /> 
        </div>
      </Router>

    )
  }
}

const mapStateToProps = state => {
  return {
    loading: state.loading
  }
}

export default connect(mapStateToProps, { getPoems })(App);
