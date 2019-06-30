import React, { Component } from 'react';

class TodoList extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
    }
  }

  render() {
    return (
      <div className='todo-container'>
        <div className='todo-item'>
          <h4
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none'
            }}
            className='todo-title'>
            { this.props.title }
          </h4>
          <h6
            className='todo-description'
            style={{
              textDecoration: this.props.completed ? 'line-through' : 'none'
            }}>
            { this.props.description }
          </h6>
          <h6
            className='todo-date'
            // style={{
            //   textDecoration: this.props.completed ? 'line-through' : 'none'
            // }}>
            >
            { this.props.date }
          </h6>
        </div>
      </div>
    )
  }
}


export default TodoList;