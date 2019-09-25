import { shallow, mount } from 'enzyme';
import ColorList from './ColorList';

jest.mock('../StarRating/StarRating');

describe("<ColorList /> ui component", () => {
    let wrapper;
    const _rate = jest.fn()
    beforeAll(() => {
        wrapper = mount(<ColorList colors={_testColors} rateColor={_rate} />);
    });

    it("renders without crashing", () =>
        expect(wrapper.exists()).toBeTruthy());

    it("renders three colors", () =>
        expect(wrapper
            .find('ul')
            .children()
        ).toHaveLength(3));

    it("calls rateColor on button click", () => {
        wrapper
            .find('button.rate')
            .at(0)
            .simulate('click')
        expect(_rate).toHaveBeenCalled();
    });

    it("matches snapshot", () =>
        expect(wrapper).toMatchSnapshot());
});
