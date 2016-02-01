import expect from 'expect'
import reducer from './index'
import {
  SELECT_AVAILABILITY_OPTION,
  REQUEST_DELIVERY_SLOTS,
  RECEIVE_DELIVERY_SLOTS
} from '../actions/types'

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({
      deliverySlotsByDateLocation: {
        deliverySlots: [],
        isLoading: false
      }, selectedAvailabilityOption: 'Home delivery'
    })
  })

  it('should handle SELECT_AVAILABILITY_OPTION', () => {
    expect(
      reducer({
        deliverySlotsByDateLocation: {
          deliverySlots: [],
          isLoading: false
        },
        selectedAvailabilityOption: 'Home delivery'
      }, {
        type: SELECT_AVAILABILITY_OPTION,
        availabilityOption: 'Collect in store'
      })
    ).toEqual({
      deliverySlotsByDateLocation: {
        deliverySlots: [],
        isLoading: false
      },
      selectedAvailabilityOption: 'Collect in store'
    })
  })

})
