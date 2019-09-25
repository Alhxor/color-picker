import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import deepfreeze from 'deepfreeze';
import shortid from 'shortid';

configure({ adapter: new Adapter() });

global.React = React;

global._testColors = [
    {
        id: 'testred',
        title: 'red',
        hexCode: '#aa0000',
        rating: 1
    },
    {
        id: 'testgreen',
        title: 'green',
        hexCode: '#00aa00',
        rating: 4
    },
    {
        id: 'testblue',
        title: 'blue',
        hexCode: '#0000aa',
        rating: 3
    }
];

global._store = {
    dispatch: jest.fn(),
    subscribe: jest.fn(),
    getState: jest.fn(() => ({ colors: _testColors })),
};

expect.extend({
    toBeAValidShortid(received) {
        const pass = shortid.isValid(received);
        if (pass) return {
            message: () => `expected ${received} to not be a valid shortid`,
            pass: true,
        };
        return {
            message: () => `expected ${received} to be a valid shortid`,
            pass: false,
        }
    }
});
