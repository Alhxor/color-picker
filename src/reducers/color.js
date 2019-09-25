import {C} from '../constants';

const color = (state={}, action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return {
                id: action.id,
                title: action.title,
                hexCode: action.hexCode || '#000000',
                rating: 0,
            };

        case C.RATE_COLOR:
            return {
                ...state,
                rating: action.rating,
            };

        default:
            return {...state};
    }
}

export default color;
