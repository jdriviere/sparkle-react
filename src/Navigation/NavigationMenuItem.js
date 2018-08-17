import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({
    children,
    active,
    special,
    className,
    ...attributes
}) => {
    const classes = classNames('nav__menu__item',
    {
        'make-active': active,
        'make-special': special
    },
    className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Item.propTypes = {
    children: PropTypes.any,
    active: PropTypes.bool,
    special: PropTypes.bool,
    className: PropTypes.string
};

export default Item;