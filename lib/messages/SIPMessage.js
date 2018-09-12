'use strict';

const Transaction = require('./transaction');

/**
 * Base message for the SIP API
 * @memberof module:mcs-sip-api
 */
class SIPMessage extends Transaction {
  /**
   * Creates a SIPMessage
   * @param  {String} [name] The name of the message
   * @param  {Object} [body] The body of the message
   */
  constructor (name, body, params = {}) {
    const { transactionId } = params;
    super(transactionId);
    this._name = name || this.constructor.name.charAt(0).toLowerCase() +
      this.constructor.name.slice(1);
    this.version = "0.0.1-dev";
    this.timestamp = 0;
    this.body = body || {};
  }

  set name (value) {
    this._name = value;
  }

  get name () {
    return this._name;
  }
}

module.exports = SIPMessage;
