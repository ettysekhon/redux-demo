import React from 'react';
import { shallow } from 'enzyme';
import expect from 'expect';
import DeliverySlots from './DeliverySlots';

const TEST_DELIVERY_SLOTS = [{
  date: '18 Jan 2016',
  slots: [{
    text: 'morning',
    available: true
  }, {
    text: 'afternoon',
    available: true
  }]
}];

describe('DeliverySlots', () => {
  it('renders correct number of delivery slots', () => {
    const wrapper = shallow(<DeliverySlots deliverySlots={TEST_DELIVERY_SLOTS} />);

    const expectedSlots = TEST_DELIVERY_SLOTS[0].slots.length;

    const actualSlots = wrapper.find('li').length;

    expect(actualSlots).toEqual(expectedSlots);
  });

  it('renders the slot label correctly', () => {
    const wrapper = shallow(<DeliverySlots deliverySlots={TEST_DELIVERY_SLOTS} />);

    const firstSlot = wrapper.find('li').first();

    expect(firstSlot.text()).toContain('morning');
  });
});
