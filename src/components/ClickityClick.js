// Code ClickityClick Component Here
import React from 'react'

export default class ClickityClick extends React.Component {
  constructor () {
    super() 
    this.state = {
      hasBeenClicked: false,
      currentTheme: 'blue',
      addressInfo: {
        street: null,
        number: null,
        city: null,
        country: null
      },

    }
  }

  handleClick = () => {
    this.setState({
      hasBeenClicked: !hasBeenClicked
    })
  }

  render () {
    return (
      <div>
        <p>I have {this.state.hasBeenClicked ? null : 'not'} has been clicked!</p>
        <button onClick={this.handleClick}>Click Me!</button>
      </div>
    )
  }
}