import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tags = ({
    children,
    solid,
    className,
    ...attributes
}) => {
    const classes = classNames('tags', {
        'make-solid': solid
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Tags.propTypes = {
    children: PropTypes.any,
    solid: PropTypes.bool,
    className: PropTypes.string
};

export default Tags;