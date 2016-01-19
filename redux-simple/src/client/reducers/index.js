import { combineReducers } from 'redux'
import {
  SELECT_AVAILABILITY_OPTION,
  REQUEST_DELIVERY_SLOTS,
  RECEIVE_DELIVERY_SLOTS
} from '../actions/types'

const selectedAvailabilityOption = (state = 'Home delivery', action) => {
  switch (action.type) {
    case SELECT_AVAILABILITY_OPTION:
      return action.availabilityOption
    default:
      return state
  }
}

const deliverySlotsByDateLocation = (state = {
  isLoading: false,
  deliverySlots: []
}, action) => {
  switch (action.type) {
    case RECEIVE_DELIVERY_SLOTS:
      return Object.assign({}, state, {
        isLoading: false,
        deliverySlots: action.deliverySlots || []
      })
    case REQUEST_DELIVERY_SLOTS:
      return Object.assign({}, state, {
        isLoading: true
      })
    default:
      return state
  }
}

const rootReducer = combineReducers({
  deliverySlotsByDateLocation,
  selectedAvailabilityOption
})

export default rootReducer
