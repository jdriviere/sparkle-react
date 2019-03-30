import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Footer = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('hero-footer', className);

    return (
        <footer className={classes} {...attributes}>
            {children}
        </footer>
    );
}

Footer.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Footer;