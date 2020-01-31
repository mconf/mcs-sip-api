'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Unregister extends SIPMessage {
  constructor(bindings) {
    super(C.UNREGISTER);
    this.body.bindings = bindings;
  }
}

module.exports = Unregister;
