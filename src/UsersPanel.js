import React, {Component} from 'react'
import UserItem from './UserItem'
import NumbersButton from './NumbersButton'

class UsersPanel extends Component {
  state = {
    showGamesPlayed: true
  }
  invertGamesPlayed = () => {
    this.setState(() => ({
    	showGamesPlayed: !this.state.showGamesPlayed
    }))
  }

  render() {
    const users = this.props.users
    
    return <div>
      <h3>User's panel</h3>
    	<ul>
        {users.map((user) => (
        	<UserItem user={user} showGamesPlayed={this.state.showGamesPlayed} key={user.username} />
        ))}
    	</ul>
		<NumbersButton showGamesPlayed={this.state.showGamesPlayed} invertGamesPlayed={this.invertGamesPlayed} />
    </div>
  }
}

export default UsersPanel