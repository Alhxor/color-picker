const StarRatingMock = ({ stars, selected, onRatingChange }) => (
    <div className='star-rating-mock'>
        <span className='stars'>{stars}</span>
        <span className='selected'>{selected}</span>
        <button className='rate' onClick={onRatingChange}>rate</button>
    </div>
);

StarRatingMock.displayName = 'StarRatingMock';

export default StarRatingMock;
