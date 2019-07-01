import React, { Component } from 'react';
import Edit from './Edit.js';

export class List extends Component {

  constructor(props) {
    super(props);
    this.state = {
      popup: null
    }
    this.editTodo = this.editTodo.bind(this);
  }

  editTodo = (todo) => {
    this.setState({
      popup: todo
    })
  }

  render() {

    return (
      <div>
        <div className='todo-container'>
          <div className='todo-dimension'>
            <h1 className='todo-header'>Miscellaneous</h1>
              { this.props.todos.map((todo) => {
                return (
                  <ul key={todo.id}
                      className='todo-inner-scroll'
                      onClick={ () => this.editTodo(todo) }>
                    <li className='todo-item'>
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
                        { todo.date }
                      </h6>
                    </li>
                  </ul>
                )
              })}
            <button className='add-todo-button' onClick={ () => this.editTodo(true) }>Add new to do...</button>
          </div>
            <button className='add-category-button'>Add new category</button>
        </div>
      { this.state.popup ?
        <Edit todo={ this.state.popup } closePopup={ () => this.editTodo(null) }/>
        :
        null
      }
      </div>
    )
  }
}

export default List;