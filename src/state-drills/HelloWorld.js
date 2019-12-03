import React from 'react';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            who: 'world'
            }
    }

    worldClick = () => {
        this.setState({
            who: 'world'
        })
    }

    friendClick = () => {
        this.setState({
            who: 'friend'
        })
    }

    reactClick = () => {
        this.setState({
            who: 'React'
        })
    }

    render() {
      return (
        <div>
          <h2>Hello, variable</h2>
          <p>Hello {this.state.who}!</p>
          <button 
            onClick={this.worldClick}
          >
            World
          </button>
          <button className="friend-button"
            onClick={this.friendClick}
          >
            Friend
          </button>
          <button
            onClick={this.reactClick}
          >
            React
          </button>
        </div>
      )
    }
}

export default HelloWorld