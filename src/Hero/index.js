import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './HeroHeader';
import Body from './HeroBody';
import Footer from './HeroFooter';

const Hero = ({
    children,
    size,
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
    const classes = classNames('hero', {
        'make-small': size === 'small',
        'make-medium': size === 'medium',
        'make-large': size === 'large',
        'make-half-height': size === 'halfSize',
        'make-full-height': size === 'fullSize',
        'make-primary': primary,
        'make-info': info,
        'make-success': success,
        'make-warning': warning,
        'make-danger': danger,
        'make-light': light,
        'make-dark': dark,
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Hero.Header = Header;
Hero.Body = Body;
Hero.Footer = Footer;

Hero.propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf([ 'small', 'medium', 'large', 'halfSize', 'fullSize' ]).isRequired,
    primary: PropTypes.bool,
    info: PropTypes.bool,
    success: PropTypes.bool,
    warning: PropTypes.bool,
    danger: PropTypes.bool,
    light: PropTypes.bool,
    dark: PropTypes.bool,
    className: PropTypes.string
};

export default Hero;