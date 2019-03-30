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
    const classes = classNames('nav-menu',
    {
        'make-right': right
    },
    className);
    
    return (
        <ul className={classes} {...attributes}>
            {children}
        </ul>
    );
};

Menu.Item = Item;

Menu.propTypes = {
    children: PropTypes.any,
    right: PropTypes.bool,
    className: PropTypes.string
};

export default Menu;