'use strict';

const util = require('util');
const parser = require('./SIPParser');

/**
 * Sender for SIP API messages
 * @memberof module:mcs-sip-api
 */
class SIPSender {

  constructor (sender) {
    this._sender = sender;
  }

  /**
   * Send message to SIP server
   * @param  {module:mcs-sip-api.SIPMessage} message The current message
   */
  sendMessage(message, callback) {
    var sMessage = parser.stringify(message);
    if ( util.isString(sMessage) && sMessage.length ) {
      this._sender.send(sMessage, callback);
    }
  }
}

module.exports = SIPSender;
