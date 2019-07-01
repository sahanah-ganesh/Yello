import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../Modules/action.js';
import List from './List.js';
import Completed from './Completed.js';
import '../Styles/App.css';

export class App extends Component {

  componentDidMount() {
    this.props.getTodos();
  }

  render() {

    return (
      <div className='todo-container'>
        <List todos={ this.props.todos }/>
        <Completed/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(
  mapStateToProps,
  { getTodos },
)(App);
