'use strict';

const SIPMessage = require('./SIPMessage');

class GetCalls extends SIPMessage {
  constructor(roomId) {
    super();
    this.body.roomId = roomId;
  }
}

module.exports = GetCalls;
