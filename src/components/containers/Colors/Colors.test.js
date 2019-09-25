import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Colors from './Colors';

jest.mock('../../ui/ColorList/ColorList');

describe("<Colors /> container", () => {
    let wrapper;
    const _rate = jest.fn();
    beforeAll(() => {
        wrapper = mount(
            <Provider store={_store}>
                <Colors rateColor={_rate} colors={_testColors} />
            </Provider>
        )
    });

    it("renders without crashing", () =>
        expect(wrapper.exists()).toBeTruthy());

    it("renders <ColorList />", () =>
        expect(wrapper.find('ColorListMock')).toHaveLength(1));

});
