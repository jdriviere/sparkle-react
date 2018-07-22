import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Header from './CardHeader';
import Body from './CardBody';
import Footer from './CardFooter';

const Card = ({
    children,
    shadow,
    hoverable,
    className,
    ...attributes
}) => {
    const classes = classNames('card', {
        'make-shadow': shadow,
        'make-hover': hoverable
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

Card.propTypes = {
    children: PropTypes.any,
    shadow: PropTypes.bool,
    hoverable: PropTypes.bool,
    className: PropTypes.string
};

export default Card;