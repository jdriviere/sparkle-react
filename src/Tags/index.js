import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tags = ({
    children,
    className
}) => {
    const classes = classNames('tags', className);
    
    return (
        <div className={ classes }>
            { children }
        </div>
    );
};

Tags.PropTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Tags;