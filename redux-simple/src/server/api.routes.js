const express = require('express');
const apiController = require('./api.controller');
const router = express.Router(); // eslint-disable-line

router.route('/delivery-slots').get(apiController.deliverySlots);

module.exports = router;
