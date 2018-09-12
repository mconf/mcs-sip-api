'use strict';

const SIPMessage = require('./SIPMessage');

class Dial extends SIPMessage {
  constructor(roomId, uri, protocol) {
    super();
    this.body.roomId = roomId;
    this.body.uri = uri;
    this.body.protocol = protocol;
  }
}

module.exports = Dial;
