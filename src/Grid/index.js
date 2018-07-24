import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Column from './GridColumn';

const Grid = ({
    children,
    gutters,
    className,
    ...attributes
}) => {
    const classes = classNames('grid', {
        'make-gutters': gutters
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Grid.Column = Column;

Grid.propTypes = {
    children: PropTypes.any,
    gutters: PropTypes.bool,
    className: PropTypes.string
};

export default Grid;