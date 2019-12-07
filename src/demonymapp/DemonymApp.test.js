import React from 'react';
import ReactDOM from 'react-DOM';
import DemonymApp from './DemonymApp';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DemonymApp />, div);
    ReactDOM.unmountComponentAtNode(div);
})