'use strict';

const SIPMessage = require('./SIPMessage');

class HangupResponse extends SIPMessage {
  constructor(callId, state, params) {
    super(null, null, params);
    this.body.callId = callId;
    this.body.state = state;
  }
}

module.exports = HangupResponse;
