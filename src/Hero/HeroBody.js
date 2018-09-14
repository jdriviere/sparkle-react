import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Body = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('hero__body', className);

    return (
        <section className={classes} {...attributes}>
            <div className="wrapper">
                {children}
            </div>
        </section>
    );
}

Body.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Body;