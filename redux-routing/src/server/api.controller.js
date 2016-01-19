exports.deliverySlots = (req, res) => {
  setTimeout(() => {
    res.json({
      data: {
        deliverySlots: [{
          date: '18 Jan 2016',
          slots: [{
            text: 'morning',
            available: true
          }, {
            text: 'afternoon',
            available: true
          }]
        }]
      }
    });
  }, 5000)
};
