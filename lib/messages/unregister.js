'use strict';

const SIPMessage = require('./SIPMessage');

class Unregister extends SIPMessage {
  constructor(bindings) {
    super();
    this.body.bindings = bindings;
  }
}

module.exports = Unregister;
