import React, { PropTypes } from 'react';
import './DeliverySlots.styl';
import template from './DeliverySlots.html';


const DeliverySlots = ({ deliverySlots }) => {
  return {
    render: template,
    deliverySlots: deliverySlots
  }
}

DeliverySlots.propTypes = {
  deliverySlots: PropTypes.array.isRequired
}

export default DeliverySlots
