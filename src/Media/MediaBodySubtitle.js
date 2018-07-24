import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Subtitle = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media__subtitle', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Subtitle.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Subtitle;