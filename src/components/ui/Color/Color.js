import React from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import './Color.css';

const Color = ({ title, hexCode, removeColor=e=>e }) => (
    <div className="show-color">
        <span className="color-title">{title}</span>
        <span className="remove-color" onClick={removeColor}>
            <FaTrash />
        </span>
        <div className="color-sample" style={{'backgroundColor': hexCode}} />
    </div>
);

Color.propTypes = {
    title: PropTypes.string.isRequired,
    hexCode: PropTypes.string.isRequired,
    removeColor: PropTypes.func
};

export default Color;
