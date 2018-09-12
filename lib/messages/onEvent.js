'use strict';

const SIPMessage = require('./SIPMessage');

class OnEvent extends SIPMessage {
  constructor(eventName, identifier) {
    super();
    this.body.eventName = eventName;
    this.body.identifier = identifier;
  }
}

module.exports = OnEvent;
