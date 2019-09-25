/* Testing middleware
https://redux.js.org/advanced/middleware
https://stackoverflow.com/questions/41242727/testing-custom-redux-middleware
https://redux.js.org/recipes/writing-tests
http://jonnyreeves.co.uk/2016/redux-middleware/
*/
import { storeFactory, logger, saver } from './storeFactory';
import { addColor, removeColor, rateColor } from '../actions/actions';
import { C } from '../constants';
import deepfreeze from 'deepfreeze';

describe("storeFactory", () => {
    it("should not throw error", () => {
        storeFactory();
    });

    it("should create a redux store", () => {
        const store = storeFactory();
        expect(store).toEqual(
            expect.objectContaining({
                dispatch: expect.any(Function),
                getState: expect.any(Function),
                subscribe: expect.any(Function),
            })
        );
    });

    describe ("dispatching actions to the created store", () => {
        let store, testid;
        const colors = [..._testColors];

        beforeAll(() => {
            store = storeFactory({colors});
            store.dispatch(addColor("Testy Red", "#690000"));
        });

        describe("addColor", () => {
            it("adds a new color", () =>
                expect(store.getState().colors).toHaveLength(4));

            it("adds a unique shortid to the new color", () =>
                expect(store.getState().colors[3].id).toBeAValidShortid());

            it("sets new color's rating to 0", () =>
                expect (store.getState().colors[3].rating).toBe(0));
        })

        describe("rateColor", () => {
            beforeAll(() => {
                testid = store.getState().colors[3].id;
                store.dispatch(rateColor(testid, 5));
            });

            it("changes rating correctly", () =>
                expect(store.getState().colors[3].rating).toBe(5));
        });

        describe("removeColor", () => {
            beforeAll(() => store.dispatch(removeColor(testid)));

            it("removes a color", () =>
                expect(store.getState().colors).toHaveLength(3));

            it("removes correct color", () =>
                expect(store.getState().colors).not.toContainEqual(
                    expect.objectContaining({ id: testid })
                ));
        });
    })
});

const middlewareTest = (fn, title) => {
    const mockStore = {
        dispatch: jest.fn(),
        subscribe: jest.fn(),
        getState: jest.fn(() =>
        ({
            colors: _testColors,
        })),
    };

    describe(`${title} middleware`, () => {
        it("does not throw error", () => {
            fn(mockStore);
        })

        it("calls next(action)", () => {
            const action = { type: 'TEST' };
            const next = jest.fn();

            fn(mockStore)(next)(action);
            expect(next).toHaveBeenCalledWith(action);
        })
    })
}

middlewareTest(logger, 'logger');
middlewareTest(saver, 'saver');
