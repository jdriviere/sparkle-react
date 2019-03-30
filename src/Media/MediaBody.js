import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Body = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media-body', className);

    return (
        <main className={classes} {...attributes}>
            {children}
        </main>
    );
}

Body.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Body;