import stateData from './initialState';
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';
import colors from '../reducers/colors';

const STORAGE_KEY = 'color-picker';

/**
 * Logs all actions and states after they are dispatched
 */
export const logger = store => next => action => {
    console.groupCollapsed("dispatching", action.type);
    console.log('previous state', store.getState());
    console.log('action', action);
    const result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

export const saver = store => next => action => {
    const result = next(action);
    localStorage[STORAGE_KEY] = JSON.stringify(store.getState())
    return result;
}

// const reducer = combineReducers({ colors, sort }); // don't have a sort yet
const reducer = combineReducers({ colors });

export const storeFactory = (initialState = stateData) => {
    return createStore(
        reducer,
        (localStorage[STORAGE_KEY] ?
            JSON.parse(localStorage[STORAGE_KEY]) :
            initialState
        ),
        // applyMiddleware(logger));
        // applyMiddleware(saver));
        applyMiddleware(logger, saver));
};
