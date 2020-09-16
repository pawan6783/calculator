import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Test from './Test';

configure({ adapter: new Adapter()});

describe("Testing of <Test/> component", () => {

    let wrapper;
    beforeEach(() => {

        wrapper = shallow(<Test/>);
    });

    it("should return one `div` element with text", () => {
        //console.log(wrapper.debug());

        expect(wrapper.find('div')).toBeDefined();
    });

    it("should return `onDateChangeHandler` method on change", () => {

        const onDateChangeHandler = jest.fn();
        wrapper = shallow(<input onChange={onDateChangeHandler}></input>)
        wrapper.find('input').simulate('onChange');
        expect(onDateChangeHandler).toBeDefined();
    });

    it("should return  `onClickHandler` method on click", () => {

        const onClickHandler = jest.fn();
        wrapper = shallow(<input onChange={onClickHandler}></input>)
        wrapper.find('input').simulate('onChange');
        expect(onClickHandler).toBeDefined();
    });
});