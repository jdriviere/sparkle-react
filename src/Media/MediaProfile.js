import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Image from './MediaProfileImage';

const Profile = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media__profile', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Profile.Image = Image;

Profile.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Profile;