'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Dial extends SIPMessage {
  constructor(roomId, uri, protocol) {
    super(C.DIAL);
    this.body.roomId = roomId;
    this.body.uri = uri;
    this.body.protocol = protocol;
  }
}

module.exports = Dial;
