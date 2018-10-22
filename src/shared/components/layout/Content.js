import React from 'react'
//Prop-Type
import PropTypes from 'prop-types';

const Content = props => {
    const { children } = props;
    return (
        <main>
            {children}
        </main>
    );
}


Content.prototype = {
    children: PropTypes.element.isRequired
}
export default Content;