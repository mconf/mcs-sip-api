'use strict';

const SIPMessage = require('./SIPMessage');

class DialResponse extends SIPMessage {
  constructor(uri, callId, params) {
    super(null, null, params);
    this.body.uri = uri;
    this.body.callId = callId;
  }
}

module.exports = DialResponse;
