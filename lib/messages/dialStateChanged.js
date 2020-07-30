'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class DialStateChanged extends SIPMessage {
  constructor(callId, state) {
    super(C.DIAL_STATE_CHANGED);
    this.body.callId = callId;
    this.body.state = state;
  }
}

module.exports = DialStateChanged;
