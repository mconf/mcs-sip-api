'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Calls extends SIPMessage {
  constructor(calls, params) {
    super(C.CALLS, null, params);
    this.body.calls = calls;
  }
}

module.exports = Calls;
