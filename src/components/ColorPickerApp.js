import React from 'react';
import { Provider } from 'react-redux';
import MainLayout from './ui/MainLayout/MainLayout';
import AddColor from './containers/AddColor/AddColor';
import Colors from './containers/Colors/Colors';
import store from '../store/store';

export default () => (
    <Provider store={store}>
        <MainLayout>
            <AddColor />
            <Colors />
        </MainLayout>
    </Provider>
)
