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

* Mocha is the most widely used test runner
* expect is a popular assertion library used in open source React projects.
* jsdom provides a headless DOM for React to use in tests, it is very fast and is also very popular in the React open source community.
* Enzyme provides a jquery like API to assert, manipulate, and traverse React output and is an alternative to react test utils.

## Test Basics:
1. spies/mocks - you can create spies using the expect assertion library. If you need to mock require dependencies then use rewire [rewire](https://github.com/jhnns/rewire)
2. spec/suite - breakdown suits/specs suitability to ensure tests are easy to follow and read (like reading simple english).
3. test setup/clean up - setup and clean state where necessary

## Test Structures:
Spec files should be saved in same folder as src file rather than in a parallel structure under test folder.

## Testing redux
See sample tests in the actions and reducers folders. See [writing redux tests](http://rackt.org/redux/docs/recipes/WritingTests.html) for further information.

## How to test:
1. XHR Requests

  * We simply mock the XHR using nock or similar:

```
  nock('http://localhost:3000/api')
    .get('/delivery-slots')
    .reply(200, {
      data: expectedData
    });
```

  * We do not need to create an integration test, we can add test for API if necessary by using supertest for express or similar:

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
  * an e2e test can also be created if necessary

2. Navigation  - we should our routes to ensure we are rendering correct components for our routes, we should also test any route onEnter/onLeave logic. See link for further information:
[react-router tests](https://github.com/rackt/react-router/tree/master/modules/__tests__)

3. Validation - test the save/submit handlers and confirm we render any error states

4. 'Smart'/Container (redux) Components:
General approach is not to test the whole app, you can however extract the app component from container (see App.js in component/container) to test App component and separate from redux, see link: https://github.com/rackt/redux/issues/447

## Do's:
1. minimize component state, this makes testing various scenarios very easy (simply render with different props and then make assertions).
2. create negative tests too and handle bad input:

[
  0,
  'zero',
  '',
  {},
  -1,
  -0.01,
  0.01,
  { something: '' },
  null,
  true,
  false,
  undefined,
  [],
  '¶',
  'some emoji',
  () => {},
  '123abc',
  'ABC',
  'abc',
  'abc 123', // space middle
  ' abc123', // space start
  ' abc123', // space start
  'abc  123', //tab
]

## Don'ts:
1. Make assertions on component.state or component.props, assert on the DOM when you can, see [testing-components](
https://github.com/ryanflorence/react-training/blob/gh-pages/lessons/02-testing-components.md)

## Further info
http://reactkungfu.com/2015/07/approaches-to-testing-react-components-an-overview/

## Things to consider
* [visual regression testing](http://www.rightmove.co.uk/dev/blog/visual-regression-automation/) also see [phantomcss](https://css-tricks.com/visual-regression-testing-with-phantomcss/)
* e2e tests - see [nightwatch](http://nightwatchjs.org/)
