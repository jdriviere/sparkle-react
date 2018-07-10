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
    radial,
    round,
    className
}) => {
    const classes = classNames('tag', {
        'tag--primary': primary,
        'tag--info': info,
        'tag--success': success,
        'tag--warning': warning,
        'tag--danger': danger,
        'tag--light': light,
        'tag--dark': dark,
        'tag--reverse': reverse,
        'tag--outline': outline,
        'tag--round': round
    }, className);

    return (
        <span className={ classes }>{ children }</span>
    );
};

Tag.PropTypes = {
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
    round: PropTypes.bool,
};

export default Tag;