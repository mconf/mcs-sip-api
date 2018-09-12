'use strict';

const SIPMessage = require('./SIPMessage');

class DTMF extends SIPMessage {
  constructor(callId, digit) {
    super();
    this.body.callId = callId;
    this.body.digit = digit;
  }
}

module.exports = DTMF;
