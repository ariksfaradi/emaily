const devKeys = require('./dev');
const prodKeys = require('./prod');

const keys = process.env.NODE_ENV === 'production' ? prodKeys : devKeys;
module.exports = keys;
