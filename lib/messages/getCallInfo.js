'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class GetCallInfo extends SIPMessage {
  constructor(id) {
    super(C.GET_CALL_INFO);
    this.body.id = id;
  }
}

module.exports = GetCallInfo;
