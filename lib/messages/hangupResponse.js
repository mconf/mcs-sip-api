'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class HangupResponse extends SIPMessage {
  constructor(callId, state, params) {
    super(C.HANGUP_RESPONSE, null, params);
    this.body.callId = callId;
    this.body.state = state;
  }
}

module.exports = HangupResponse;
