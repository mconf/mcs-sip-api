'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class DialResponse extends SIPMessage {
  constructor(callId, params) {
    super(C.DIAL_RESPONSE, null, params);
    this.body.callId = callId;
  }
}

module.exports = DialResponse;
