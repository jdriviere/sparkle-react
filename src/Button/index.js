import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({
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
    ghost,
    link,
    xSmall,
    small,
    medium,
    large,
    xLarge,
    block,
    radial,
    round,
    className
}) => {
    const classes = classNames('button', {
        'button--primary': primary,
        'button--info': info,
        'button--success': success,
        'button--warning': warning,
        'button--danger': danger,
        'button--light': light,
        'button--dark': dark,
        'button--reverse': reverse,
        'button--outline': outline,
        'button--ghost': ghost,
        'button--link': link,
        'button--xsmall': xSmall,
        'button--small': small,
        'button--medium': medium,
        'button--large': large,
        'button--xlarge': xLarge,
        'button--block': block,
        'button--h-round': radial,
        'button--f-round': round
    }, className);

    return (
        <button className={ classes }>{ children }</button>
    );
};

Button.PropTypes = {
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
    ghost: PropTypes.bool,
    link: PropTypes.bool,
    xSmall: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool,
    large: PropTypes.bool,
    xLarge: PropTypes.bool,
    block: PropTypes.bool,
    radial: PropTypes.bool,
    round: PropTypes.bool,
};

export default Button;