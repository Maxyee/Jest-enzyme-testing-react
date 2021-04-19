# Testing Simple Finance app (Jest & Enzyme)

At first we have to make a react project. Then we have to develop our simple application using react. Finally, we will test the project with the (Jest and Enzyme library).

## Necessary Library for install (steps below).

1. At first install `enzyme` and `enzyme-adapter-react-17`

### `npm i --save-dev enzyme @wojtekmaj/enzyme-adapter-react-17`

2. then install `react-test-renderer`

### `npm i react-test-renderer`

3. finally add the dev dependency library `enzyme-to-json`

### `npm install --save-dev enzyme-to-json`

4. now we have to open the code and integrate all of library for work

### `npm start`

5. from the project `src` directory open the file called `setupTests.js`

```js

import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

```

6. Now we will do our test on the application components. For now into this finance app
we will do all the test on `App.test.js` file

```js

import React from 'react';
import App from './App';
import AccountBalance from './components/AccountBalance';
import Notification from './components/Notification';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';


const userBalance = {
  balance: 1100,
  savingBalance: 103,
}

describe("rendering components", () => {
  it("render App component without crashing", () => {
    shallow(<App/>);
  });

  it("renders App component header without crashing", () => {
    const wrapper = shallow(<App/>);
    const header = (<h1 className="has-text-centered title is-1">Welcome in the personal finance app!</h1>);
    expect(wrapper.contains(header)).toEqual(true);
  });

  it("renders Notification component without crashing", () => {
    shallow(<Notification/>);
  });

  it("renders button", () => {
    const wrapper = mount(<AccountBalance accounts={userBalance} />);
    const label = wrapper.find("#balance-button").text();
    expect(label).toEqual("Send 100$");
  });
});


describe("passing props", () => {
  const accountWrapper = mount(<AccountBalance accounts={userBalance} />);
  const notificationWrapper = mount(<Notification balance={userBalance.balance}/>);

  it("accepts user account props", () => {
    expect(accountWrapper.props().accounts).toEqual(userBalance);
  });

  it("contains savingBalance value", () => {
    const value = accountWrapper.find(".savings").text();
    const expectedValue = userBalance.savingBalance + '$';
    expect(value).toEqual(expectedValue);
  });

  it("notification accepts props", () => {
    expect(notificationWrapper.props().balance).toEqual(userBalance.balance);
  })
});

describe("logic", () => {
  const wrapper = mount(<AccountBalance accounts={userBalance} />);
  const notificationWrapper = mount(<Notification balance={userBalance.balance} />);
  wrapper.find("#balance-button").simulate("click");
  it("button click - update savings", () => {
    const savingValue = wrapper.find(".savings").text();
    const expectedValue = userBalance.savingBalance + 100 + '$';
    expect(savingValue).toEqual(expectedValue);
  });

  it("button click - update savings", () => {
    const balanceValue = wrapper.find(".balance").text();
    const expectedBalanceValue = userBalance.balance - 100 + '$';
    expect(balanceValue).toEqual(expectedBalanceValue);
  });
});

describe("snapshots", () => {
  it("App snapshots", () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
  it("Accounts snapshots", () => {
    const accountBalanceTree = shallow(<AccountBalance accounts={userBalance} />);
    expect(toJson(accountBalanceTree)).toMatchSnapshot();
  });
  it("Notification snapshots", () => {
    const notificationTree = shallow(<Notification balance={userBalance.balance} />);
    expect(toJson(notificationTree)).toMatchSnapshot();
  });
});


```

7. After writing all of the test code we need to run test command for knowing the results.

### `npm run test`


8. Here is the final output for the finance app test result. we can also find the snapshot into the `src/__snapshots__` folder.
