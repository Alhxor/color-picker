import MainLayout from './MainLayout';
import { shallow } from 'enzyme';

describe("<MainLayout />", () => {
    let wrapper;
    beforeAll(() => {
        const children = (<div className="test" />);
        wrapper = shallow(<MainLayout>{children}</MainLayout>);
    });

    it("renders without crashing", () =>
        expect(wrapper.exists()).toBeTruthy());

    it("renders children", () =>
        expect(wrapper.find("div.test")).toHaveLength(1));
});
