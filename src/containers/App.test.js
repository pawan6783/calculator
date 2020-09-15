import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App';

configure({ adapter: new Adapter()});

describe("Testing of <App/> component", () => {

    let wrapper;
    beforeEach(() => {

        wrapper = shallow(<App/>);
    });

    it("should return one `div` element", () => {
        console.log(wrapper.debug());

        expect(wrapper.find('div')).toBeDefined();
    });

    it("should return one `Calculator` element", () => {

        expect(wrapper.find('Calculator')).toBeDefined();
    });
});