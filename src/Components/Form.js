import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class Form extends Component {

  constructor(props) {
    super(props)
    this.state = {
      value: '',
      startDate: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange(date) {
    console.log('date', date)
    this.setState({
      startDate: date
    })
  }

  handleSubmit(event, title, description, date) {
    event.preventDefault();
    if (!title || !description || !date) {
      return
    }
  }

  render() {
    return (
      <form
        className='form'
        onSubmit={ this.handleSubmit }>
        <input
          type='text'
          className='input-title'
          placeholder='Title'
          />
        <input
          type='text'
          className='input-description'
          placeholder='Description'
          />
          <br/>
        <DatePicker
          selected={this.state.startDate}
          onChange={this.handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="MMMM d, yyyy h:mm aa"
          timeCaption="time"
        />
        <button className='add-todo' type='submit'>
          Add Todo
        </button>
      </form>
    )
  }
}

export default Form;