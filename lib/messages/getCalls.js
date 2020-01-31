'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class GetCalls extends SIPMessage {
  constructor(roomId) {
    super(C.GET_CALLS);
    this.body.roomId = roomId;
  }
}

module.exports = GetCalls;
