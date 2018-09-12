'use strict';

const SIPMessage = require('./SIPMessage');

class Hangup extends SIPMessage {
  constructor(callId) {
    super();
    this.body.callId = callId;
  }
}

module.exports = Hangup;
