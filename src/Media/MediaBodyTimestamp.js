import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Timestamp = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media__timestamp', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Timestamp.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Timestamp;