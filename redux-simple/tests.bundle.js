var context = require.context('./src/client', true, /.+\.spec\.js?$/);
context.keys().forEach(context);
module.exports = context;
