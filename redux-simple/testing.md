# Test notes:

## Tests should be:
1. fast
2. reliable
3. easy to write

## Things to test:
1. Structure Tests - assert/test the output of components based on prop values
2. Behavior Tests - simulate events or call prop callback handlers

## Test Stack:
We use the following libraries:

* [mocha](https://github.com/mochajs/mocha) test framework
* [expect](https://github.com/mjackson/expect) a popular assertion library used in open source React projects. It also provides spy functions so there is no need for an extra library like Sinon for this.
* [jsdom](https://github.com/tmpvar/jsdom) this provides a headless DOM for React to use in tests. It is very fast.
* [Enzyme](https://github.com/airbnb/enzyme) provides a jquery like API to assert, manipulate, and traverse React output and is an alternative to react test utils.
* [nock](https://github.com/pgte/nock) to mock http requests.
* [karma](https://github.com/karma-runner/karma) to run tests in a various browsers as required.
* [rewire](https://github.com/jhnns/rewire) to mock require dependencies.
* [webdriver.io](https://github.com/webdriverio/webdriverio/) for JS Selenium based e2e tests.

## Test Guidelines:
* breakdown specs/suites to ensure tests are easy to read in the reports (i.e. read like simple english).
* tests should not be dependent on run sequence use beforeEach/afterEach to setup/cleanup state as necessary.
* test files should be saved in the same folder as src and not in a sub folder or in a parallel structure under test folder.
* we should attempt to create stateless components - this makes testing various scenarios very easy, simply render the component with different props and then make assertions on the rendered DOM. Do not make assertions on component.state or component.props see [testing-components](
https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/02-testing-components.md)
* we should use a bad data set to help test our code e.g.   0, 'zero', '', {}, -1, -0.01, 0.01, { something: '' }, null, true, false, undefined, [], '¶', 'some emoji', () => {}, '123abc', 'ABC', 'abc', 'abc 123', ' abc123', ' abc123', 'abc  123'
* Use shallow rendering for tests especially for stateless components, use full rendering when necessary (switching between the 2 is easy as they share almost same API in Enzyme).

## How to test:
1. Redux - see [writing redux tests](http://rackt.org/redux/docs/recipes/WritingTests.html) which includes sample tests. See also the following [article](http://teropa.info/blog/2015/09/10/full-stack-redux-tutorial.html) which uses a TDD approach to redux.
2. XHR Requests:

Use nock to mock the http response:

```
  nock('http://localhost:3000/api')
    .get('/delivery-slots')
    .reply(200, {
      data: expectedData
    });
```

We also need to create tests that make direct requests to the API to assert the data structure returned. We can use supertest for express or another similar approach:

```
  import app  from './app.js';
  import request from 'supertest';

  describe('api', () => {
    describe('GET /delivery-slots', () => {
      it('should return json', (done) => {
        request(app)
        .get('/api/delivery-slots')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200);
        done();
      });
    });
  });
```

Alternatively you could create API integration tests, like so:

```
import expect from 'expect';
import API from './index';

describe('API', () => {
  it('should return delivery slots', (done) => {
    API.deliverySlots
      .then((response) => response.json())
      .then((json) => {
        expect(json).toExist();
        done();
      })
  });
```

Rather than create Redux [integration tests] (https://github.com/reactjs/redux/issues/469), create Selenium based JS e2e tests using something like webdriver.io instead.

3. Navigation  - we should our routes to ensure we are rendering correct components for our routes, we should also test any route onEnter/onLeave logic. See link for further information:
[react-router tests](https://github.com/rackt/react-router/tree/master/modules/__tests__)

4. Validation - test the save/submit handlers and confirm we render any error states.

5. 'Smart'/Container (redux) Components:
General approach is not to test the whole app, you can however extract the app component from the container (see App.js in component/container) to test App component and separate from redux, see link: https://github.com/rackt/redux/issues/447

## Further info
http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

## Things to consider
* [visual regression testing](http://www.rightmove.co.uk/dev/blog/visual-regression-automation/) also see [phantomcss](https://css-tricks.com/visual-regression-testing-with-phantomcss/) or [cactus](https://github.com/winston/cactus)
* performance of tests - we should measure it and use approach to fail tests if we exceed a threshold
