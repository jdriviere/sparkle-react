import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Title from './MediaBodyTitle';
import Subtitle from './MediaBodySubtitle';
import Timestamp from './MediaBodyTimestamp';

const Body = ({
    children,
    className,
    ...attributes
}) => {
    const classes = classNames('media__body', className);

    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
}

Body.Title = Title;
Body.Subtitle = Subtitle;
Body.Timestamp = Timestamp;

Body.propTypes = {
    children: PropTypes.any,
    className: PropTypes.string
};

export default Body;