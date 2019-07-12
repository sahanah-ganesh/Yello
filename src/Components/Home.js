import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class Home extends Component {

  render() {
    return (
      <Router>
        <div className='home'>
          <button className='lhl-button'>LHL</button>
          <button className='other-button'>OG</button>
        </div>
      </Router>
    )
  }
}

export default Home;