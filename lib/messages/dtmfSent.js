'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants');

class DTMFSent extends SIPMessage {
  constructor(callId, tone, params) {
    super(C.DTMF_SENT, null, params);
    this.body.callId = callId;
    this.body.tone = tone;
  }
}

module.exports = DTMFSent;
