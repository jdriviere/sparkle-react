import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tag = ({
    children,
    primary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    outline,
    reverse,
    bullet,
    className,
    ...attributes
}) => {
    const classes = classNames('tag', {
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger,
        'make-light': light,
        'make-dark': dark,
        'make-reverse': reverse,
        'make-outline': outline,
        'make-bullet': bullet
    }, className);

    return (
        <span className={classes} {...attributes}>{children}</span>
    );
};

Tag.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    reverse: PropTypes.bool,
    outline: PropTypes.bool,
    radial: PropTypes.bool,
    bullet: PropTypes.bool,
};

export default Tag;