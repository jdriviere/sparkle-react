import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Buttons = ({
    children,
    solid,
    className,
    ...attributes
}) => {
    const classes = classNames('buttons', {
        'make-solid': solid
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Buttons.PropTypes = {
    children: PropTypes.any,
    solid: PropTypes.bool,
    className: PropTypes.string
};

export default Buttons;