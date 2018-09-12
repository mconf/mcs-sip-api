'use strict';
const SIPMessage = require('./SIPMessage');

class SIPParser {
  /**
   * Parse an stringyfied message into {@link module:mcs-sip-api.SIPMessage
   *  SIPMessage}
   * @param  {String} message Input message
   * @return {@link module:mcs-sip-api.SIPMessage SIPMessage}
   */
  static parse(message) {
    var pMessage = JSON.parse(message.data);
    return new SIPMessage(pMessage.name || pMessage._name, pMessage.body,
      { transactionId : pMessage.transactionId });
  }

  static stringify(message) {
    return JSON.stringify(message);
  }
}

module.exports = SIPParser;
