'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Registered extends SIPMessage {
  constructor(bindings, params) {
    super(C.REGISTERED, null, params);
    this.body.bindings = bindings;
  }
}

module.exports = Registered;
