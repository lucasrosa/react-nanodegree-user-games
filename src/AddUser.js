import React, {Component} from 'react'

class AddUser extends Component {
  state = {
    user: {
      firstname: "",
      lastname: "",
      username: ""
    },
    error: false
  }

  addUser = (e) => {
    e.preventDefault()
  	let userAddedWithSuccess = this.props.addUserHandler(this.state.user)
    if (userAddedWithSuccess) {
      this.setState(() => ({
        user: {
          firstname: "",
          lastname: "",
          username: ""
        }
      }))
    } else {
      this.setState(() => ({
      	error:true
      }))
    }
  }

  handleChange = (event) => {
    const field = event.target.name
    const value = event.target.value
    this.setState((currentState) => {
    	currentState.user[field] = value
	    currentState.error = false
		return currentState
    })
  }

  render() {
    let errorMessage = this.state.error? "User already exists!" : ""
    
    return <div>
      <h3>Add user </h3>
      <form>
          <div>
            First Name <input type="text" name="firstname" value={this.state.user.firstname} onChange={this.handleChange} />
          </div>
          <div>
            Last Name <input type="text" name="lastname"  value={this.state.user.lastname} onChange={this.handleChange} />
          </div>
          <div>
            Username <input type="text" name="username"  value={this.state.user.username} onChange={this.handleChange} />
          </div>
		  {errorMessage}
          <button onClick={this.addUser}>Add user</button>
      </form>
    </div>
  }
}

export default AddUser