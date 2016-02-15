import fetch from 'isomorphic-fetch';

const URL = 'http://localhost:3000/api';

const deliverySlots = fetch(`${URL}/delivery-slots`);

export default {
  deliverySlots
}
