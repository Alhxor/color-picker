import React from 'react';
import PropTypes from 'prop-types';
import './StarRating.css';
import Star from '../Star/Star';

class StarRating extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            starsHighlighted: 0,
        };
    }

    highlightAllStarsToTheLeft = number => {
        this.setState({
            starsHighlighted: number,
        });
    };

    removeHighlighting = () => {
        this.setState({
            starsHighlighted: 0
        });
    }

    render = () => (
        <div className="StarRating">
            {[...Array(this.props.totalStars)].map((x, i) =>
                <Star
                    key={i}
                    selected={i < this.props.starsSelected}
                    highlighted={i < this.state.starsHighlighted}
                    onClick={() => this.props.onRatingChange(i+1)}
                    onMouseOver={() => this.highlightAllStarsToTheLeft(i+1)}
                    onMouseOut={() => this.removeHighlighting()}
                />
            )}
        </div>
    );
};

StarRating.propTypes = {
    stars: PropTypes.number,
    selected: PropTypes.number,
    onRatingChange: PropTypes.func
};

StarRating.defaultProps = {
    totalStars: 5,
    starsSelected: 0,
    onRatingChange: (...x) => x,
};

export default StarRating;
