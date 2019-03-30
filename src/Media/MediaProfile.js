import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './MediaProfileImage';

const Profile = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media-profile', className);

    return (
        <aside className={classes} {...attributes}>
            {children}
        </aside>
    );
}

Profile.Image = Image;

Profile.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Profile;