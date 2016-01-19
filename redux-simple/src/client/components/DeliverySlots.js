import React, { PropTypes } from 'react'

const DeliverySlots = ({ deliverySlots }) => {
  return (
    <ul>
      {
        deliverySlots.map((deliverySlot, i) => {
          return deliverySlot.slots.map((slot, j) => {
            return (<li key={j}>{slot.text}</li>)
          })
        })
      }
    </ul>
  )
}

DeliverySlots.propTypes = {
  deliverySlots: PropTypes.array.isRequired
}

export default DeliverySlots
