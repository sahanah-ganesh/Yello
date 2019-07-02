import React, { Component } from 'react';
import { getCompleted } from '../Modules/action.js';
import { connect } from 'react-redux';
import moment from 'moment';

export class Completed extends Component {

  componentDidMount() {
    this.props.getCompleted();
  }

  render() {

    return (
      <div>
        <div className='todo-container'>
          <div className='todo-dimension'>
            <h1 className='todo-header'>Completed</h1>
              { this.props.completed.map((todo) => {
                return (
                  <ul key={todo.id} className='todo-inner-scroll'>
                    <li className='todo-item'>
                      <div>
                        <h4
                          style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                          }}
                          className='todo-title'>
                          { todo.title }
                        </h4>
                        <h6
                          className='todo-description'
                          style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                          }}>
                          { todo.description }
                        </h6>
                        <h6
                          className='todo-date'
                          style={{
                            textDecoration: todo.completed ? 'line-through' : 'none'
                          }}>
                          { moment(todo.date).format('MMMM DD YYYY') }
                        </h6>
                      </div>
                    </li>
                  </ul>
                )
              })}
            <button className='add-todo-button'>Add new category...</button>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    completed: state.completed,
  };
}

export default connect(
  mapStateToProps,
  { getCompleted },
)(Completed);