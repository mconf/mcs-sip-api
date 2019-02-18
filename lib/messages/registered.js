'use strict';

const SIPMessage = require('./SIPMessage');

class Registered extends SIPMessage {
  constructor(registrar, bindings, params) {
    super(null, null, params);
    this.body.registrar = registrar;
    this.body.bindings = bindings;
  }
}

module.exports = Registered;
