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
    outlined,
    reversed,
    ghost,
    link,
    smaller,
    small,
    medium,
    large,
    larger,
    block,
    radial,
    round,
    href,
    className,
    ...attributes
}) => {
    const classes = classNames('button', {
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger,
        'make-light': light,
        'make-dark': dark,
        'make-reversed': reversed,
        'make-outlined': outlined,
        'make-ghost': ghost,
        'make-link': link,
        'make-smaller': smaller,
        'make-small': small,
        'make-large': large,
        'make-larger': larger,
        'make-block': block,
        'make-radial': radial,
        'make-round': round
    }, className);

    // Return a link if href is present
    if (href !== undefined) {
        return (
            <a href={href} className={classes} {...attributes}>{children}</a>
        );
    } // End of IF

    return (
        <button className={classes} {...attributes}>{children}</button>
    );
};

Button.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    reversed: PropTypes.bool,
    outlined: PropTypes.bool,
    ghost: PropTypes.bool,
    link: PropTypes.bool,
    smaller: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    larger: PropTypes.bool,
    block: PropTypes.bool,
    radial: PropTypes.bool,
    round: PropTypes.bool,
    href: PropTypes.string
};

export default Button;