import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTodos } from '../Modules/action.js';
import TodoList from './TodoList.js';
import Form from './Form.js';
import '../Styles/App.css';

export class App extends Component {

  componentDidMount() {
    this.props.getTodos();
  }

  render() {
    return (
      <div className='App'>
        <Form/>
        {
          this.props.todos.map((todo) => {
            return <TodoList
              key={ todo.id }
              id={ todo.id }
              title={ todo.title }
              description={ todo.description }
              date={ todo.date }
              completed={ todo.completed }
              />
          })
        }
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
