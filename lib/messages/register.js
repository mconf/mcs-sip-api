'use strict';

const SIPMessage = require('./SIPMessage');

class Register extends SIPMessage {
  constructor(registrar, bindings) {
    super();
    this.body.registrar = registrar;
    this.body.bindings = bindings;
  }
}

module.exports = Register;
