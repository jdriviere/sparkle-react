import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Profile from './MediaProfile';
import Body from './MediaBody';

const Media = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media', className);
    
    return (
        <article className={classes} {...attributes}>
            {children}
        </article>
    );
};

Media.Profile = Profile;
Media.Body = Body;

Media.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Media;
