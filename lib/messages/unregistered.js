'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Unregistered extends SIPMessage {
  constructor(bindings, params) {
    super(C.UNREGISTERED, null, params);
    this.body.bindings = bindings;
  }
}

module.exports = Unregistered;
