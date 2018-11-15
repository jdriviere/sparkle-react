import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Column from './Column';

const Columns = ({
    children,
    gapless,
    multiline,
    className,
    ...attributes
}) => {
    const classes = classNames('columns', {
        'make-no-gaps': gapless,
        'make-multiline': multiline,
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Columns.Column = Column;

Columns.propTypes = {
    children: PropTypes.any,
    gapless: PropTypes.bool,
    multiline: PropTypes.bool,
    className: PropTypes.string
};

export default Columns;