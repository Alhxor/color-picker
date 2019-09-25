import React from 'react';
import PropTypes from 'prop-types';
import './Star.css';

const Star = ({
    selected = false,
    highlighted = false,
    onClick = e=>e,
    onMouseOver = e=>e,
    onMouseOut = e=>e
}) => {
    const flavor = (highlighted) ? 'highlighted' :
                    (selected) ? 'selected' : '';

    return (
        <div
            className={`star ${flavor}`}
            onClick={onClick}
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        />
    );
};

Star.propTypes = {
    selected: PropTypes.bool,
    highlighted: PropTypes.bool,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
    onMouseOut: PropTypes.func,
};

export default Star;
