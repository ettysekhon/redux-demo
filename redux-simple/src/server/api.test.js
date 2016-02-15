import app  from './entry.test.js';
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
