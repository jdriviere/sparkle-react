import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Buttons = ({
    children,
    solid,
    centered,
    right,
    className,
    ...attributes
}) => {
    const classes = classNames('buttons', {
        'make-solid': solid,
        'make-centered': centered,
        'make-right': right
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Buttons.propTypes = {
    children: PropTypes.any,
    solid: PropTypes.bool,
    centered: PropTypes.bool,
    right: PropTypes.bool,
    className: PropTypes.string
};

export default Buttons;