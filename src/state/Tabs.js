import React from 'react';
// import { NONAME } from 'dns';

class Tabs extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
            currentTabIndex: 0
            }
    }

    static defaultProps = {

    }

    handleButtonClick(index) {
        console.log('Clicked!', { index })
        this.setState({
            currentTabIndex: index
        })
    }

    renderButtons() {
        return this.props.tabs.map((tab, index) => (
          <button key={index} onClick={() => this.handleButtonClick(index)}>
            {tab.name}
          </button>
        ))
    }

    renderContent() {
        
        const currentTab = this.props.tabs[this.state.currentTabIndex]
      
        return (
            <div className='content'>
            {currentTab.content}
            </div>
        )
    }


    render() {

        return (
            <div className='Accordion'>
                <h2>Accordion</h2>
                {this.renderButtons()}
                {!!this.props.tabs.length && this.renderContent()}
            </div>
        )
    }
}

export default Tabs