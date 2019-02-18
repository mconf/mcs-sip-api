'use strict';

const SIPMessage = require('./SIPMessage');

class Unregistered extends SIPMessage {
  constructor(registrar, bindings, params) {
    super(null, null, params);
    this.body.registrar = registrar;
    this.body.bindings = bindings;
  }
}

module.exports = Unregistered;
