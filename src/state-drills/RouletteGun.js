import React from 'react';

class RouletteGun extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            chamber: null,
            spinningTheChamber: false,
            prompt: 'Would you like to play a game of Russian Roulette?'
            }
    }

    static defaultProps = {
        bulletInChamber: 8,
    }

    triggerPull = () => {

        this.setState({
            spinningTheChamber: true,
            prompt: 'Spinning the chamber...'
        })

        setTimeout(() => {

            let fate = Math.ceil(Math.random() * 8);

            this.setState({
                chamber: fate
            })

            if (this.state.chamber === this.props.bulletInChamber) {
                this.setState({
                    prompt: 'You have died.'
                })
            } else {
                this.setState({
                    prompt: `'Click.' You live on. Play again?`
                })
            }
        
        }, 2000)
    }

    render() {
      return (
        <div>
          <h2>Russian roulette</h2>
          <p>{this.state.prompt}</p>
          <button
            onClick={this.triggerPull}
          >
            Spin the chamber and pull the trigger
          </button>
        </div>
      )
    }
}

export default RouletteGun;