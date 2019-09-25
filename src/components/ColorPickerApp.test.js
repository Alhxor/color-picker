import ColorPickerApp from './ColorPickerApp';
import { shallow, mount } from 'enzyme';

describe("<ColorPickerApp />", () => {
    let wrapper;
    beforeAll(() => wrapper = mount(<ColorPickerApp />));

    it("renders without crashing", () =>
        expect(wrapper.exists()).toBeTruthy());

    it("renders <AddColor />", () =>
        expect(wrapper
            .find("AddColor")
        ).toBeTruthy());
});
