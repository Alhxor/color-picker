import AddColorForm from './AddColorForm';
import { mount } from 'enzyme';

describe("<AddColorForm />", () => {
    let wrapper;
    const addColor = jest.fn();
    beforeAll(() => {
        wrapper = mount(<AddColorForm addColor={addColor} />);
    });

    it("renders without crashing", () =>
        expect(wrapper.exists()).toBeTruthy());

    it("calls addColor when clicking submit", () => {
        wrapper.find("form").simulate("submit");
        expect(addColor).toHaveBeenCalled();
    });

    it("matches snapshot", () =>
        expect(wrapper).toMatchSnapshot());
});
