import colors from './colors';
import { C } from '../constants';
import deepfreeze from 'deepfreeze';

describe("colors reducer handles actions without mutating state", () => {

    it("should not throw error with default arguments", () => {
        const state = [];
        const action = {
            type: C.ADD_COLOR,
        };

        colors(state, action);
    });

    it("adds a color on ADD_COLOR", () => {
        const state = [..._testColors];
        const action = {
            type: C.ADD_COLOR,
            id: 'testid',
            title: 'Testy Green',
            hexCode: "#006900",
        }
        const newColors = colors(deepfreeze(state), action);

        expect(newColors).toHaveLength(4);
        expect(newColors).toContainEqual({
            id: 'testid',
            title: 'Testy Green',
            hexCode: "#006900",
            rating: 0,
        });
    });

    it("rates only the correct color on RATE_COLOR", () => {
        const state = [..._testColors];
        const action = {
            type: C.RATE_COLOR,
            id: 'testred', // initial rating: 1
            rating: 5,
        }
        const newColors = colors(deepfreeze(state), action);

        expect(newColors).toContainEqual(
            expect.objectContaining({
                id: 'testgreen',
                rating: 4, // initial rating: 4, should be the same
            }),
            expect.objectContaining({
                id: 'testred',
                rating: 5,
            })
        );
    });

    it("removes correct color on REMOVE_COLOR", () => {
        const state = [..._testColors];
        const action = {
            type: C.REMOVE_COLOR,
            id: 'testred',
        };
        const newColors = colors(deepfreeze(state), action);

        expect(newColors).toHaveLength(2);
        expect(newColors).not.toContainEqual(
            expect.objectContaining({ id: 'testred' })
        );
    });

})
