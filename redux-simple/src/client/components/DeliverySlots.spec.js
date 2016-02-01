import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
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

    const shallowRenderer = createRenderer();
    shallowRenderer.render(<DeliverySlots deliverySlots={TEST_DELIVERY_SLOTS} />);
    const deliverySlots = shallowRenderer.getRenderOutput();

    // get slots for first date
    const actualSlotList = deliverySlots.props.children[0].filter((s) => s.type === 'li');
    const expectedSlotList = TEST_DELIVERY_SLOTS[0].slots;

    expect(actualSlotList.length).toEqual(expectedSlotList.length);

  });


  it('renders morning first slot', () => {

    const shallowRenderer = createRenderer();
    shallowRenderer.render(<DeliverySlots deliverySlots={TEST_DELIVERY_SLOTS} />);
    const deliverySlots = shallowRenderer.getRenderOutput();

    const actualSlots = deliverySlots.props.children[0].filter((s) => s.type === 'li');
    const actualMorningSlot = actualSlots[0].props.children;
    const expectedMorningSlot = TEST_DELIVERY_SLOTS[0].slots[0].text;
    expect(actualMorningSlot).toEqual(expectedMorningSlot);

  });


});
