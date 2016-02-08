import React, { Component, PropTypes } from 'react'
import Picker from './Picker'
import DeliverySlots from './DeliverySlots'

class App extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleChange(availabilityOption) {
    this.props.selectAvailabilityOption(availabilityOption)
  }

  onClick() {
    this.props.fetchDeliverySlots(new Date(), 'SW19 3AL')
  }

  renderDeliverySlots(deliverySlots, isLoading) {
    return deliverySlots.length > 0 && (
      <div>
        <h2>We have slots</h2>
        <div style={{ opacity: isLoading ? 0.5 : 1 }}>
          <DeliverySlots deliverySlots={deliverySlots} />
        </div>
      </div>
    )
  }

  render () {

    const { selectedAvailabilityOption, isLoading, deliverySlots } = this.props
    const { handleChange, onClick } = this

    return (
      <div>
        <Picker value={selectedAvailabilityOption}
                onChange={handleChange}
                options={[ 'Home delivery', 'Collect in store' ]} />

        <button onClick={onClick}>Proceed to checkout</button>

        { isLoading && <h2>Loading...</h2> }
        { !isLoading && deliverySlots.length === 0 &&  <h2>Empty.</h2> }
        { this.renderDeliverySlots(deliverySlots, isLoading) }
      </div>
    )
  }
}

App.propTypes = {
  selectedAvailabilityOption: PropTypes.string.isRequired,
  deliverySlots: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectAvailabilityOption: PropTypes.func.isRequired,
  fetchDeliverySlots: PropTypes.func.isRequired
}

export default App
