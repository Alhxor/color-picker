import AddColor from './AddColor';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

jest.mock('../../ui/AddColorForm/AddColorForm');

describe("<AddColor /> container", () => {
    let wrapper;
    beforeAll(() => wrapper = mount(
        <Provider store={_store}>
            <AddColor />
        </Provider>
    ));

    it("renders without crashing", () =>
        expect(wrapper.exists()).toBeTruthy());

    it("renders a form", () =>
        expect(wrapper.find('AddColorFormMock')).toBeTruthy());

    it("sends addColor action creator via props", () =>
        expect(wrapper
            .find('AddColorFormMock')
            .prop('addColor')
        ).toBeInstanceOf(Function)
    );
})
