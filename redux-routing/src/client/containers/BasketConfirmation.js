import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import Picker from '../components/Picker'
import { selectAvailabilityOption, proceedToCheckout } from '../actions/basketConfirmation'

class BasketConfirmationContainer extends Component {

  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  handleChange(availabilityOption) {
    this.props.selectAvailabilityOption(availabilityOption)
  }

  onClick() {
    this.props.proceedToCheckout()
  }

  render() {
    const { selectedAvailabilityOption } = this.props
    const { handleChange, onClick } = this

    return (
      <div>
        <Picker value={selectedAvailabilityOption}
                onChange={handleChange}
                options={[ 'Home delivery', 'Collect in store' ]} />

        <button onClick={onClick}>Proceed to checkout</button>

      </div>
    )
  }
}

BasketConfirmationContainer.propTypes = {
  selectedAvailabilityOption: PropTypes.string.isRequired,
  selectAvailabilityOption: PropTypes.func.isRequired,
  proceedToCheckout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {

  const { selectedAvailabilityOption } = state

  return {
    selectedAvailabilityOption
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectAvailabilityOption: (availabilityOption) => {
      dispatch(selectAvailabilityOption(availabilityOption))
    },
    proceedToCheckout: () => {
      dispatch(proceedToCheckout())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BasketConfirmationContainer)
