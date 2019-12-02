import React from 'react';

class Bomb extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            count: 0,
            word: 'tick'
            }
    }

    // static defaultProps = {
    //     step: 1,
    // }

    componentDidMount() {

        this.interval = setInterval(() => {

            if (this.state.count >=8) {
                this.setState({
                    word: 'BOOM!!!!'
                })
            } else if (this.state.count % 2 === 0) {
                this.setState({
                    word: 'tick'
                })
            } else if (this.state.count % 2 !== 0) {
                this.setState({
                    word: 'tock'
                })
            }

          const newCount = this.state.count + 1;
          this.setState({
            count: newCount
          })
        }, 1000)
        
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
      return (
        <div>
          <p>{this.state.word}</p>
          {/* <p>{this.state.count}</p> */}
        </div>
      )
    }
}

export default Bomb;