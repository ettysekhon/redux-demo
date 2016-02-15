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
});
