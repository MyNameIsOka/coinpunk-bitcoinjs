var assert = require('assert');
var Util = require('..').Util;
var BigInteger = require('..').BigInteger;

test('Util parseValue', function() {
  assert.equal(Util.parseValue('derp').toString(), new BigInteger('0').toString());
  assert.equal(Util.parseValue('50').toString(), new BigInteger('5000000000').toString());
  assert.equal(Util.parseValue('0.6').toString(), new BigInteger('60000000').toString());
  assert.equal(Util.parseValue('0.0000000001').toString(), new BigInteger('1').toString());
});