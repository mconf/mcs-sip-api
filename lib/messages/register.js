'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Register extends SIPMessage {
  constructor(routeTo, bindings) {
    super(C.REGISTER);
    this.body.routeTo = routeTo;
    this.body.bindings = bindings;
  }
}

module.exports = Register;
