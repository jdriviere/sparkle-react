import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({
    children,
    primary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    large,
    xLarge,
    className,
    ...attributes
}) => {
    const classes = classNames('loader', {
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger,
        'make-light': light,
        'make-dark': dark,
        'make-large': large,
        'make-xlarge': xLarge
    }, className);

    return (
        <div className={classes} {...attributes}>{children}</div>
    );
};

Loader.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    dark: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    large: PropTypes.bool,
    xLarge: PropTypes.bool
};

export default Loader;