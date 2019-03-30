import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Image = ({
    src,
    alt,
    className,
    ...attributes
}) => {
    const classes = classNames('card-image', className);

    return (
        <img className={classes} {...attributes} src={src} alt={alt} />
    );
}

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string
};

export default Image;