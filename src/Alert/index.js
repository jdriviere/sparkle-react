import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Alert = ({
    children,
    primary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    outline,
    className,
    ...attributes
}) => {
    const classes = classNames('alert', {
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger,
        'make-light': light,
        'make-dark': dark,
        'make-outline': outline
    }, className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Alert.PropTypes = {
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
    outline: PropTypes.bool
};

export default Alert;