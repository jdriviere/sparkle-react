import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Profile from './MediaProfile';
import Body from './MediaBody';

const Media = ({
    children,
    reverse,
    center,
    className,
    ...attributes
}) => {
    const classes = classNames('media', {
        'make-reverse': reverse,
        'make-center': center
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Media.Profile = Profile;
Media.Body = Body;

Media.propTypes = {
    children: PropTypes.any,
    reverse: PropTypes.bool,
    center: PropTypes.bool,
    className: PropTypes.string
};

export default Media;
