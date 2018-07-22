import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Title = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card__title', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Title.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Title;