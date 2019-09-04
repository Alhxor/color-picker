import React from 'react';
import PropTypes from 'prop-types';
import Color from '../Color/Color';
import StarRating from '../StarRating/StarRating';
import './ColorList.css';

const ColorList = ({ colors, onColorRatingChange = (...x) => x }) => (
    <ul>
        {colors.map((color, i) => (
            <li key={color.id}>
                <Color
                    name={color.name}
                    hexCode={color.hexCode}
                />
                <StarRating
                    totalStars={5}
                    starsSelected={color.rating}
                    onRatingChange={onColorRatingChange(color.id)}
                />
            </li>
        ))}
    </ul>
);

ColorList.propTypes = {
    colors: PropTypes.array.isRequired,
    onColorRatingChange: PropTypes.func
};

export default ColorList;
