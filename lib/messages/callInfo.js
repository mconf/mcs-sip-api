'use strict';

const SIPMessage = require('./SIPMessage');

class CallInfo extends SIPMessage {
  constructor(callInfo) {
    super(null, null, params);
    this.body.callInfo = callInfo;
  }
}

module.exports = CallInfo;
