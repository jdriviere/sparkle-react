import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Column = ({
    children,
    size,
    offset,
    className,
    ...attributes
}) => {
    const classes = classNames('column', {
        'make-1': size === '1',
        'make-2': size === '2',
        'make-3': size === '3',
        'make-4': size === '4',
        'make-5': size === '5',
        'make-6': size === '6',
        'make-7': size === '7',
        'make-8': size === '8',
        'make-9': size === '9',
        'make-10': size === '10',
        'make-11': size === '11',
        'make-12': size === '12',
        'make-twelfth': size === 'twelfth',
        'make-sixth': size === 'sixth',
        'make-fourth': size === 'fourth',
        'make-third': size === 'third',
        'make-half': size === 'half',
        'make-thirds': size === 'thirds',
        'make-fourths': size === 'fourths',
        'make-sixths': size === 'sixths',
        'make-twelfths': size === 'twelfths',
        'make-full': size === 'full',
        'offset-1': offset === '1',
        'offset-2': offset === '2',
        'offset-3': offset === '3',
        'offset-4': offset === '4',
        'offset-5': offset === '5',
        'offset-6': offset === '6',
        'offset-7': offset === '7',
        'offset-8': offset === '8',
        'offset-9': offset === '9',
        'offset-10': offset === '10',
        'offset-11': offset === '11',
        'offset-12': offset === '12',
        // NOTE: Fix fractional offsets, as they don't render!
        // 'offset-twelfth': offset === 'twelfth',
        // 'offset-sixth': offset === 'sixth',
        // 'offset-fourth': offset === 'fourth',
        // 'offset-third': offset === 'third',
        // 'offset-half': offset === 'half',
        // 'offset-thirds': offset === 'thirds',
        // 'offset-fourths': offset === 'fourths',
        // 'offset-sixths': offset === 'sixths',
        // 'offset-twelfths': offset === 'twelfths',
        // 'offset-full': offset === 'full'
    }, className);
    
    return (
        <div className={classes} {...attributes}>
            {children}
        </div>
    );
};

Column.propTypes = {
    children: PropTypes.any,
    size: PropTypes.oneOf([
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        'twelfth', 'sixth', 'fourth', 'third', 'half', 'thirds', 'fourths',
        'sixths', 'twelfths', 'full'
    ]),
    offset: PropTypes.oneOf([
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12',
        // NOTE: Fix fractional offsets first!
        // 'twelfth', 'sixth', 'fourth', 'third', 'half', 'thirds', 'fourths',
        // 'sixths', 'twelfths', 'full'
    ]),
    className: PropTypes.string
};

export default Column;