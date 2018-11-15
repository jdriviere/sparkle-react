import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Boxes = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('boxes', className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Boxes.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Boxes;