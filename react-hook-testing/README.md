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

7. After writing all of the test code we need to run test command for knowing the results.

### `npm run test`