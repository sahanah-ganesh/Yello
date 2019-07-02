import React, { Component } from 'react';
import Edit from './Edit.js';
import moment from 'moment';
import Add from './Add.js';
import { deleteTodo } from '../Modules/action.js';
import { createCompleted } from '../Modules/action.js';
import { connect } from 'react-redux';

export class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popupEdit: null,
      popupAdd: null,
    }

    this.editTodo = this.editTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.toggleCheck = this.toggleCheck.bind(this);
  }

  editTodo = (todo) => {
    this.setState({
      popupEdit: todo
    })
  }

  addTodo = (todo) => {
    this.setState({
      popupAdd: todo
    })
  }

  closePopup = (state) => {
    this.setState({
      popupEdit: state,
      popupAdd: state
    })
  }

  toggleCheck = (todo) => {
    console.log('todo', todo)
    this.props.deleteTodo(todo);
    const updateTodo = {
      title: todo.title,
      description: todo.description,
      date: todo.date,
      completed: !todo.completed
    }
    console.log('update', updateTodo)
    this.props.createCompleted(updateTodo);
    window.location.reload();
  }

  render() {

    return (
      <div>
        <div className='todo-container'>
          <div className='todo-dimension'>
            <h1 className='todo-header'>Pending</h1>
              { this.props.todos.map((todo) => {
                return (
                  <ul key={todo.id} className='todo-inner-scroll'>
                    <li className='todo-item'>
                      <label className='todo-check'>
                        <input className='checkmark' type='checkbox' checked='checked' onChange={ () => this.toggleCheck(todo) }/>
                        <span className='checkmark'>{ todo.completed ? `✔️` : null }</span>
                      </label>
                      <div onClick={ () => this.editTodo(todo) }>
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
            <button className='add-todo-button' onClick={ () => this.addTodo(true) }>Add new to do...</button>
          </div>
        </div>
      { this.state.popupEdit ?
        <Edit todo={ this.state.popupEdit } closePopup={ () => this.closePopup(null) }/>
        :
        null
      }
      { this.state.popupAdd ?
        <Add closePopup={ () => this.closePopup(null) }/>
        :
        null
      }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    todos: state.todos,
    completed: state.completed
  };
}

export default connect(
  mapStateToProps,
  { deleteTodo, createCompleted },
)(List);
