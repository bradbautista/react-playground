import React from 'react';


class TheDate extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            datetime: new Date()
        }
    }

    componentDidMount() {
        // console.log('componentDidMount')
        this.interval = setInterval(() => {
        //   console.log('setInterval')
          this.setState({
            datetime: new Date()
          })
        }, 1000)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    render() {
        // console.log('render')
        return (
        <div>
        <h2>Datetime</h2>
        <p>{this.state.datetime.toLocaleString()}</p>
        </div>
        )
    }

}

export default TheDate;