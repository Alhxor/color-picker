import { addColor, removeColor, rateColor } from './actions.js';
import { C } from '../constants';
import shortid from 'shortid';

describe("addColor function", () => {
    it("should not throw error when called without arguments", () => {
        addColor();
    });

    it("returns a new ADD_COLOR action", () => {
        const newColor = addColor('Testy', '#012345');
        expect(newColor).toEqual({
            type: C.ADD_COLOR,
            id: expect.toBeAValidShortid(),
            title: 'Testy',
            hexCode: '#012345',
        });
    });
});

describe("removeColor function", () => {
    it("should not throw error", () => {
        removeColor('testid');
    });

    it("returns a new REMOVE_COLOR action", () => {
        const action = removeColor('testid');
        expect(action).toEqual({
            type: C.REMOVE_COLOR,
            id: 'testid',
        });
    });
});

describe("rateColor function", () => {
    it("should not throw error", () => {
        rateColor('id', 4);
    });

    it("should return a RATE_COLOR action", () => {
        const action = rateColor('testid', 4);
        expect(action).toEqual({
            type: C.RATE_COLOR,
            id: 'testid',
            rating: 4,
        });
    });
});
