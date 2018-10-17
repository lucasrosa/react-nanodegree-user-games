import React, {Component} from 'react'

class UserItem extends Component {
  render() {
    const user = this.props.user
    const showGamesPlayed = this.props.showGamesPlayed
    const totalGames = showGamesPlayed ? user.totalgames : "\*"
    return <li>{user.username} played {totalGames} games</li>
  }
}

export default UserItem