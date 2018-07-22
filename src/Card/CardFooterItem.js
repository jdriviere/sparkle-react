import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Item = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card__footer__item', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Item.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Item;