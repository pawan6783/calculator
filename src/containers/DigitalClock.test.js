import React from 'react';
import {configure, shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DigitalClock from './DigitalClock';

configure({ adapter: new Adapter()});

describe("Testing of <DigitalClock/> component", () => {


    it("should match `DigitalClock` component with snapshot with no props", () => {
        //console.log(wrapper.debug());
        const wrapper = shallow(<DigitalClock></DigitalClock>);
        expect(wrapper).toMatchSnapshot();
    });

    it("should return `onChangeHandler` method on toggle", () => {

        const onChangeHandler = jest.fn();
        const wrapper = shallow(<DigitalClock onChange={onChangeHandler}></DigitalClock>)
        wrapper.find('input').simulate('onChange');
        expect(onChangeHandler).toBeDefined();
    });

    it("should return  `h1` element with text", () => {

        const wrapper = mount(<DigitalClock></DigitalClock>);
        expect(wrapper.find('h1').first().text()).toEqual('Digital Clock');
        wrapper.unmount();
    });
});