const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const api = require('./api.routes');
const app = module.exports = express();

app.use('/api', api);

app.use(express.static(path.join(__dirname, '../..')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../index.html'));
});

app.listen(port, (error) => {
  if (error) {
    console.error(error)
  } else {
    console.info(`==> 🌎 Open up http://localhost:${port}/ in your browser.`);
  }
});
