import API from '../api';
import {
  REQUEST_DELIVERY_SLOTS,
  RECEIVE_DELIVERY_SLOTS } from './types'

const mapDeliverySlot = (deliverySlot) => {
  return deliverySlot
}

const requestDeliverySlots = (date, postCode) => {
  return {
    type: REQUEST_DELIVERY_SLOTS,
    date,
    postCode
  }
}

const receiveDeliverySlots = (json) => {
  var deliverySlots = json.data.deliverySlots.map(mapDeliverySlot);
  return {
    type: RECEIVE_DELIVERY_SLOTS,
    deliverySlots
  }
}

export const fetchDeliverySlots = (date, postCode) => {
  return (dispatch) => {
    dispatch(requestDeliverySlots(date, postCode));
    return API.deliverySlots
      .then((response) => response.json())
      .then((json) => {
        dispatch(receiveDeliverySlots(json))
      })
  }
}
