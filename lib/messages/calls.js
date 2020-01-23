'use strict';

const SIPMessage = require('./SIPMessage');

class Calls extends SIPMessage {
  constructor(calls) {
    super(null, null, params);
    this.body.calls = calls;
  }
}

module.exports = Calls;
