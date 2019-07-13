import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home.js';
import List from './List.js';
import '../Styles/App.css';

export class App extends Component {

  render() {

    return (
      <Router>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route exact path='/:id' component={ List } />
        </div>
      </Router>
    )
  }
}

export default App;
