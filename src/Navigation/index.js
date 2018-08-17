import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Brand from './NavigationBrand';
import Menu from './NavigationMenu';

const Navigation = ({
    children,
    fixed,
    className,
    ...attributes
}) => {
    const classes = classNames('nav', {
        'make-fixed': fixed
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            <input type="checkbox" id="nav__trigger"/>
            <label className="nav__toggle" htmlFor="nav__trigger"></label>
            {children}
        </div>
    );
};

Navigation.Brand = Brand;
Navigation.Menu = Menu;

Navigation.propTypes = {
    children: PropTypes.any,
    fixed: PropTypes.bool,
    className: PropTypes.string
};

export default Navigation;