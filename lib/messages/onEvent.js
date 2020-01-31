'use strict';

const SIPMessage = require('./SIPMessage');
const C = require('../constants.js');

class OnEvent extends SIPMessage {
  constructor(eventName, identifier) {
    super(C.ON_EVENT);
    this.body.eventName = eventName;
    this.body.identifier = identifier;
  }
}

module.exports = OnEvent;
