import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Calculator from './Calculator';

configure({ adapter: new Adapter()});

describe("Testing of <Calculator/> component", () => {

    let wrapper;
    beforeEach(() => {

        wrapper = shallow(<Calculator/>);
    });

    it("should return one `h1` element with text", () => {
    //    console.log(wrapper.debug());

        expect(wrapper.find('h1').text()).toBe("Calculator");
    });

    it("should return one `Calculator` element", () => {

        expect(wrapper.find('Calculator')).toBeDefined();
    });

    it("should return one `label` element with text", () => {
        wrapper.setProps({result: "hello"});

        expect(wrapper.find('label').text()).toBe("hello");
    });

    // it("should return function on click ", () => {
    //     const onClickHandler = jest.fn();

    //     const wrapper = shallow(<Calculator onClick = {onClickHandler}></Calculator>);
    //     wrapper.find('button').simulate('onClick');
    //     expect(onClickHandler).toBeTruthy();
    // });
});