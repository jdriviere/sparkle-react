import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Title from './CardHeaderTitle';
import Subtitle from './CardHeaderSubtitle';

const Header = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card__header', className);

    return (
        <header className={classes} {...attributes}>
            {children}
        </header>
    );
}

Header.Title = Title;
Header.Subtitle = Subtitle;

Header.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Header;