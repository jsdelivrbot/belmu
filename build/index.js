// generated by sapper build at 2018-06-14T23:41:50.566Z
process.env.NODE_ENV = process.env.NODE_ENV || 'production';
process.env.SAPPER_DEST = __dirname;
process.env.PORT = process.env.PORT || 3000;

console.log('Starting server on port ' + process.env.PORT);
require('./server.js');