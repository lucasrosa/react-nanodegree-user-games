import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UsersPanel from './UsersPanel'
import AddUser from './AddUser'

/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [
      {firstname:"Lucas", lastname:"Rosa", username:"lucasrosa", totalgames: 0},
      {firstname:"Emily", lastname:"Maria", username:"emilymaria", totalgames: 1}
    ]
  }
  addUser = (user) => {
    user.totalgames = 0
    console.log(user)
    let usernameExists = this.state.users.filter((u) => u.username === user.username ).length > 0
    if (usernameExists) {
      	return false
    } else {
      this.setState((currentState) => {
      		let newState = currentState;
    		newState.users.push(user)
    	  	return newState
	  })
      return true
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<div>
			<AddUser addUserHandler={this.addUser} />	
			<UsersPanel users={this.state.users} />
		</div>
      </div>
    );
  }
}

export default App;
