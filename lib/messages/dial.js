'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Dial extends SIPMessage {
  constructor(callId) {
    super(C.DIAL);
    this.body.callId = callId;
  }
}

module.exports = Dial;
