import React, { Component } from 'react';

export class Completed extends Component {

  render() {

    return (
      <div>
        <div className='todo-container'>
          <div className='todo-dimension'>
            <h1 className='todo-header' contentEditable>Completed</h1>
            <ul className='todo-inner-scroll'>
            <li className='todo-item'>
            </li>
            </ul>
          </div>
            <button className='add-category-button' onClick={ () => this.addCategory }>Add new category</button>
        </div>
      </div>
    )
  }
}

export default Completed;