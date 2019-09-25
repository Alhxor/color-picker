import color from './color';
import { C } from '../constants';
import deepfreeze from 'deepfreeze';

describe("color reducer handles actions without mutating state", () => {

    it("should not throw error with default arguments", () => {
        const state = {};
        const action = {
            type: C.ADD_COLOR,
        };

        color(state, action);
    });

    it("creates a new color object on ADD_COLOR action", () => {
        const state = {};
        const action = {
            type: C.ADD_COLOR,
            id: 'testid',
            title: 'Testy Green',
            hexCode: '#006900',
        }
        const newColor = color(state, action);

        expect(newColor).toEqual({
            id: 'testid',
            title: 'Testy Green',
            hexCode: '#006900',
            rating: 0,
        });
    });

    it("changes rating on RATE_COLOR action", () => {
        const state = {
            id: 'testid',
            title: 'Testy Green',
            hexCode: '#006900',
            rating: 0,
        };
        const action = {
            type: C.RATE_COLOR,
            id: 'testid',
            rating: 5,
        };
        const ratedColor = color(deepfreeze(state), action);

        expect(ratedColor).toEqual({
            id: 'testid',
            title: 'Testy Green',
            hexCode: '#006900',
            rating: 5,
        });
    });
})
