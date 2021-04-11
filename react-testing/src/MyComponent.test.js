import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import MyComponent from './MyComponent';

Enzyme.configure({ adapter: new Adapter() });


describe('MyComponent', () => {
    it('should show text', () => {
        const wrapper = shallow(<MyComponent />);
        const text = wrapper.find('div div');
        expect(text.text()).toBe('Text goes here');
    });
    it('should hide text when button it clicked', () => {
        const wrapper = shallow(<MyComponent/>);
        const button = wrapper.find('button');
        button.simulate('click');
        const text = wrapper.find('div div');
        expect(text.length).toBe(0);
    })
});

// describe('MyComponent', () => {
//     it('should be true', () => {
//         const foo = true;
//         expect(foo).toBe(true);
//     })
//     it('should be false', () => {
//         const foo = true;
//         expect(foo).toBe(false);
//     })
// });