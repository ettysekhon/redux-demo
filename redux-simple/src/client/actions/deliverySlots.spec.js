import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { fetchDeliverySlots } from './deliverySlots';
import {
  REQUEST_DELIVERY_SLOTS,
  RECEIVE_DELIVERY_SLOTS } from './types';
import nock from 'nock';

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('async actions', () => {
  afterEach(() => {
    nock.cleanAll()
  })

  it('creates RECEIVE_DELIVERY_SLOTS when fetching delivery slots has been done',
    (done) => {

    var expectedData = {
        deliverySlots: [{
        date: '18 Jan 2016',
        slots: [{
          text: 'morning',
          available: true
        }, {
          text: 'afternoon',
          available: true
        }]
      }]
    };
    var date = new Date();
    var postCode = 'SW19 3AL';

    nock('http://localhost:3000/api')
      .get('/delivery-slots')
      .reply(200, {
        data: expectedData
      });

    const expectedActions = [
      {
        type: REQUEST_DELIVERY_SLOTS,
        date,
        postCode
      },
      {
        type: RECEIVE_DELIVERY_SLOTS,
        deliverySlots: expectedData.deliverySlots
      }
    ];

    const store = mockStore({ deliverySlots: [] }, expectedActions, done);

    store.dispatch(fetchDeliverySlots(date, postCode));

  });

});
