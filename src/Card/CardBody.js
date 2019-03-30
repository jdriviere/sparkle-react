import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './CardBodyImage';

const Body = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('card-body', className);

    return (
        <section className={classes} {...attributes}>
            {children}
        </section>
    );
}

Body.Image = Image;

Body.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Body;