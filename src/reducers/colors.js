import {C} from '../constants';
import color from './color';

const colors = (state=[], action) => {
    switch(action.type) {
        case C.ADD_COLOR:
            return [
                ...state,
                color(null, action),
            ];

        case C.RATE_COLOR:
            return state.map(
                c => c.id !== action.id ? c : color(c, action)
            );

        case C.REMOVE_COLOR:
            return state.filter(
                c => c.id !== action.id
            );

        default:
            return [...state];
    }
}

export default colors;
