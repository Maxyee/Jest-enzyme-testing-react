# Main Component 

```js
import React from 'react';

export default class MyComponent extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            isShown: true,
        }
    }

    toggleIsShown = () => this.setState(({ isShown }) => ({ isShown: !isShown }));

    render(){
        const { isShown } = this.state;
        return (
            <div>
                <button onClick={this.toggleIsShown}>Toggle</button>
                { isShown && <div>Text goes here</div> }
            </div>
        )
    }
}

```

## Test Component

```js

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


```

