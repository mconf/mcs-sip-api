'use strict';

const SIPMessage = require('./SIPMessage');

class DialStateChanged extends SIPMessage {
  constructor(callId, state) {
    super();
    this.body.callId = callId;
    this.body.state = state;
  }
}

module.exports = DialStateChanged;
