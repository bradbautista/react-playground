import React from 'react';
import './Split.css';

// How to read props for my learning brain
// function Split(className, flexBasis) {

// }

function Split(props) {

    const combinedClassName = `split ${props.className}`;
    const newStyles = {flex: props.flexBasis};

    return (
        <div 
        className={combinedClassName}
        style={newStyles}
        >
            {props.children}
        </div>
    );

};

export default Split;