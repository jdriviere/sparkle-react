import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Item from './NavigationMenuItem';

const Menu = ({
    children,
    right,
    className,
    ...attributes
}) => {
    const classes = classNames('nav__menu',
    {
        'make-right': right
    },
    className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Menu.Item = Item;

Menu.propTypes = {
    children: PropTypes.any,
    right: PropTypes.bool,
    className: PropTypes.string
};

export default Menu;