import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Brand = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('nav__brand', className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Brand.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Brand;