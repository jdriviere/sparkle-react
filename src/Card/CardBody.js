import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './CardBodyImage';

const Body = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card__body', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Body.Image = Image;

Body.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Body;