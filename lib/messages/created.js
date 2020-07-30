'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Created extends SIPMessage {
  constructor(uri, callId, params) {
    super(C.CREATED, null, params);
    this.body.uri = uri;
    this.body.callId = callId;
  }
}

module.exports = Created;
