import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Picker from '../components/Picker'
import DeliverySlots from '../components/DeliverySlots'
import { fetchDeliverySlots } from '../actions/deliverySlots'

class DeliverySlotsContainer extends Component {
  
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchDeliverySlots(new Date(), 3749505, 'SW19 3AL')
  }

  render() {

    const { deliverySlots, isLoading } = this.props

    return (
      <div>
        {
          isLoading && <h2>Loading...</h2>
        }
        {!isLoading && deliverySlots.length === 0 &&
          <h2>Empty.</h2>
        }
        {deliverySlots.length > 0 &&
          <div>
          <h2>We have delivery slots!</h2>
          <div style={{ opacity: isLoading ? 0.5 : 1 }}>
            <DeliverySlots deliverySlots={deliverySlots} />
          </div>
        </div>
        }
      </div>
    )
  }
}

DeliverySlotsContainer.propTypes = {
  deliverySlots: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchDeliverySlots: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {

  const { deliverySlotsByDateLocation  } = state

  const {
    isLoading,
    deliverySlots
  } = deliverySlotsByDateLocation || {
    isLoading: true,
    deliverySlots: []
  }

  return {
    deliverySlots,
    isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchDeliverySlots: (date, postCode) => {
      dispatch(fetchDeliverySlots(date, postCode))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeliverySlotsContainer)
