import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Box = ({
    children,
    href,
    className,
    ...attributes
}) => {
    const classes = classNames('box', className);

    // Return a link if href is present
    if (href !== undefined) {
        return (
            <a href={href} className={classes} {...attributes}>{children}</a>
        );
    } // End of IF

    return (
        <div className={classes} {...attributes}>{children}</div>
    );
};

Box.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string,
    href: PropTypes.string
};

export default Box;