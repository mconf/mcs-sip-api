'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants');

class ErrorResponse extends SIPMessage {
  constructor(response, params) {
    super(C.ERROR, null, params);
    this.body.response = response;
  }
}

module.exports = ErrorResponse;
