import shortid from 'shortid';
import {C} from '../constants';

export const addColor = (title='', hexCode='#000000') => ({
    type: C.ADD_COLOR,
    id: shortid.generate(),
    title,
    hexCode,
});

export const removeColor = id => ({
    type: C.REMOVE_COLOR,
    id,
});

export const rateColor = (id, rating) => ({
    type: C.RATE_COLOR,
    id,
    rating,
});
