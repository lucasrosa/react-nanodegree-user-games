import React, {Component} from 'react'

class NumbersButton extends Component {
  render() {
    const showGamesPlayed = this.props.showGamesPlayed
    const text = showGamesPlayed ? "Hide number of games played" : "Show number of games played"
  	return <button onClick={this.props.invertGamesPlayed}>{text}</button>
  }
}

export default NumbersButton