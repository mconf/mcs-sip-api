'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class Create extends SIPMessage {
  constructor(roomId, uri) {
    super(C.CREATE);
    this.body.roomId = roomId;
    this.body.uri = uri;
  }
}

module.exports = Create;
