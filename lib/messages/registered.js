'use strict';

const SIPMessage = require('./SIPMessage');

class Registered extends SIPMessage {
  constructor(bindings, params) {
    super(null, null, params);
    this.body.bindings = bindings;
  }
}

module.exports = Registered;
