import React, { Component } from 'react';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      users: []
    }
    this.getUsers = this.getUsers.bind(this);
    this.userSelected = this.userSelected.bind(this);
  }

  getUsers() {
    fetch('http://localhost:3000/api/users')
    .then(response => response.json())
    .then(data => {
      const users = data.data;
      this.setState({
        users: users,
        selected: null
      })
    })
  }

  userSelected(user) {
    this.setState({
      selected: user
    })
    console.log('user', user)
  }

  componentDidMount() {
    this.getUsers()
  }

  render() {
    // console.log('state', this.state.users)
    return (
      <div>
        <div className='header'>
          <h1 className='title'>Select player</h1>
        </div>
        <div className='home'>
        { this.state.users &&
            this.state.users.map((user) => {
              return (
                <div className='user' onClick={ () => this.userSelected(user) }>
                  <img className='user-img' src={ user.img }/>
                  <h3>{ user.username }</h3>
                </div>
              )
            })
        }
        </div>
      </div>
    )
  }
}

export default Home;
