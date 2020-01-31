'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class DTMF extends SIPMessage {
  constructor(callId, digit) {
    super(C.DTMF);
    this.body.callId = callId;
    this.body.digit = digit;
  }
}

module.exports = DTMF;
