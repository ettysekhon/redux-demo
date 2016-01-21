import { combineReducers } from 'redux'
import { routeReducer, UPDATE_LOCATION } from 'redux-simple-router'
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

const routeChangeReducer = (state = {}, action) => {
  // just log the route change for now but you could invoke an action here
  // to update a breadcrumb or
  // anything else that needs to listen to route changes
  if (action.type === UPDATE_LOCATION) {
    console.log(`route location changed to ${JSON.stringify(action.payload, 2, null)}`)
  }
  return state
}

const rootReducer = combineReducers({
  deliverySlotsByDateLocation,
  selectedAvailabilityOption,
  routing: routeReducer,
  routeChange: routeChangeReducer
})

export default rootReducer
