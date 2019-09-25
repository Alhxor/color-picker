import React from 'react';
import PropTypes from 'prop-types';
import Color from '../Color/Color';
import StarRating from '../StarRating/StarRating';
import './ColorList.css';

const ColorList = ({
    colors,
    rateColor = (...x) => x,
    removeColor = (...x) => x
}) => (
    <ul>
        {colors.map(color => {
            console.log(color);
            return (
            <li key={color.id}>
                <Color
                    title={color.title}
                    hexCode={color.hexCode}
                    removeColor={removeColor(color.id)}
                />
                <StarRating
                    totalStars={5}
                    starsSelected={color.rating}
                    onRatingChange={rateColor(color.id)}
                />
            </li>
        )})}
    </ul>
);

ColorList.propTypes = {
    colors: PropTypes.array.isRequired,
    rateColor: PropTypes.func,
    removeColor: PropTypes.func
};

export default ColorList;
