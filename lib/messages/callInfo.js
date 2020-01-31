'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class CallInfo extends SIPMessage {
  constructor(callInfo, params) {
    super(C.CALL_INFO, null, params);
    this.body.callInfo = callInfo;
  }
}

module.exports = CallInfo;
