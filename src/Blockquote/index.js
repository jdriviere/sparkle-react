import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Blockquote = ({
    children,
    primary,
    info,
    success,
    warning,
    danger,
    className,
    ...attributes
}) => {
    const classes = classNames('blockquote', {
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger
    }, className);

    return (
        <blockquote className={classes} {...attributes}>
            {children}
        </blockquote>
    );
};

Blockquote.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
};

export default Blockquote;