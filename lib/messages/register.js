'use strict';

const SIPMessage = require('./SIPMessage');

class Register extends SIPMessage {
  constructor(routeTo, bindings) {
    super();
    this.body.routeTo = routeTo;
    this.body.bindings = bindings;
  }
}

module.exports = Register;
