import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Progress = ({
    children,
    value,
    max,
    primary,
    info,
    success,
    warning,
    danger,
    light,
    dark,
    className,
    ...attributes
}) => {
    const classes = classNames('progress', {
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger,
        'make-light': light,
        'make-dark': dark,
    }, className);

    return (
        <progress className={classes} {...attributes} value={value} max={max}>
            {children}
        </progress>
    );
}

Image.propTypes = {
    children: PropTypes.any,
    value: PropTypes.string.isRequired,
    max: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string
};

export default Progress;