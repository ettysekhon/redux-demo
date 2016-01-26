import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

import DeliverySlots from '../DeliverySlots.js'

describe('DeliverySlots', () => {

    it('render list with one li', () => {

        var deliverySlots = [
            {slots: [ {text: 'first'} ]}
        ];

        var delivery = TestUtils.renderIntoDocument(
            <DeliverySlots deliverySlots={deliverySlots} />
        );

        var deliveryNode = ReactDOM.findDOMNode(delivery);

        expect(deliveryNode).not.toEqual(null);

        expect(deliveryNode.children.length).toEqual(1);
    });

});