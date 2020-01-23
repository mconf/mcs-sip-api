'use strict';

const SIPMessage = require('./SIPMessage');

class GetCallInfo extends SIPMessage {
  constructor(id) {
    super();
    this.body.id = id;
  }
}

module.exports = GetCallInfo;
