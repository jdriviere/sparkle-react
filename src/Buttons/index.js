import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Buttons = ({
    children,
    className
}) => {
    const classes = classNames('buttons', className);
    
    return (
        <div className={ classes }>
            { children }
        </div>
    );
};

Buttons.PropTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Buttons;