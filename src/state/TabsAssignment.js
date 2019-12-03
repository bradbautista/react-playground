import React from 'react';

class TabsAssignment extends React.Component {
    constructor(props) {
        super(props)
            this.state = {
                activeSectionIndex: null
            }
    }

    static defaultProps = {
        sections: []
    }

    handleSetActiveSection = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }
    
    renderItem(section, idx, activeSectionIndex) {
    return (
        <li className='Accordion__item' key={idx}>
        <button
            type='button'
            onClick={() => this.handleSetActiveSection(idx)}
        >
            {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
        </li>
    )
    }
    
    render() {
        const { activeSectionIndex } = this.state
        const { sections } = this.props
        return (
        <div className='Accordion'>
            <h2>Tabs Assignment</h2>
          <ul>
            {sections.map((section, idx) =>
              this.renderItem(section, idx, activeSectionIndex)
            )}
          </ul>
        </div>
        )
      }
    }
    
export default TabsAssignment