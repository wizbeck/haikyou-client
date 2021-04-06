import React, { Component} from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Form from './components/Form';
import Poems from './components/Poems';
import ErrorPage from './components/ErrorPage'


class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <NavBar />
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/about" component={ About } />
          <Route exact path="/haikus" component={ Poems } />
          <Route exact path="/new" component={ Form } />
          <Route component={ErrorPage} />
        </Switch>
        <Footer />  
      </Router>

    )
  }
}

export default App
