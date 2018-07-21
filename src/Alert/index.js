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
    className
}) => {
    const classes = classNames('alert', {
        'alert--primary': primary,
        'alert--info': info,
        'alert--success': success,
        'alert--warning': warning,
        'alert--danger': danger,
        'alert--light': light,
        'alert--dark': dark,
        'alert--outline': outline
    }, className);

    return (
        <div className = { classes }>
            { children }
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