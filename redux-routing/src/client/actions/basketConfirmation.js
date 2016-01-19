import { SELECT_AVAILABILITY_OPTION } from './types'
import { routeActions } from 'redux-simple-router'

export const selectAvailabilityOption = (availabilityOption) => {
  return {
    type: SELECT_AVAILABILITY_OPTION,
    availabilityOption
  }
}

export const proceedToCheckout = () => {
  return (dispatch, getState) => {
    const { selectedAvailabilityOption } = getState()

    if (selectedAvailabilityOption === 'Home delivery') {
      dispatch(routeActions.push('/delivery-slots'))
    } else {
      dispatch(routeActions.push('/select-store'))
    }
  }
}
