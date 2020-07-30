'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Hangup extends SIPMessage {
  constructor(callId) {
    super(C.HANGUP);
    this.body.callId = callId;
  }
}

module.exports = Hangup;
