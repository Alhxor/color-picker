import React from 'react';
import PropTypes from 'prop-types';
import './Color.css';

const Color = ({ name, hexCode }) => (
    <div className="show-color">
        <span className="color-title">{name}</span>
        <div className="color-sample" style={{'backgroundColor': hexCode}} />
    </div>
);

Color.propTypes = {
    name: PropTypes.string.isRequired,
    hexCode: PropTypes.string.isRequired,
};

export default Color;
