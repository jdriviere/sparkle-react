import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Header = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card-header', className);

    return (
        <header className={classes} {...attributes}>
            {children}
        </header>
    );
}

Header.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Header;