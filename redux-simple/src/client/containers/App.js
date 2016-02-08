import React from 'react'
import { connect } from 'react-redux'
import App from '../components/App'
import { fetchDeliverySlots } from '../actions/deliverySlots'
import { selectAvailabilityOption } from '../actions/basketConfirmation'

const mapStateToProps = (state) => {
  const { deliverySlotsByDateLocation,
    selectedAvailabilityOption } = state

  const {
    isLoading,
    deliverySlots
  } = deliverySlotsByDateLocation || {
    isLoading: true,
    deliverySlots: []
  }

  return {
    selectedAvailabilityOption,
    deliverySlots,
    isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectAvailabilityOption: (availabilityOption) => {
      dispatch(selectAvailabilityOption(availabilityOption))
    },
    fetchDeliverySlots: (date, postCode) => {
      dispatch(fetchDeliverySlots(date, postCode))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
