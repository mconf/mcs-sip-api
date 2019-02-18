'use strict';

const SIPBaseClient = require('./SIPBaseClient');
const SIPTransactionManager = require('./SIPTransactionManager');

const OnEvent = require('./messages/onEvent');
const DTMF = require('./messages/dtmf');
const Dial = require('./messages/dial');
const Hangup = require('./messages/hangup');
const Register = require('./messages/register');
const Unregister = require('./messages/unregister');


/**
 * This class handles connection to Media Control Server application
 * @extends module:mcs-sip-api.SIPBaseClient
 * @memberof module:mcs-sip-api
 * @fires {@link module:mcs-sip-api#event:joined joined}
 */
class SIPClient extends SIPBaseClient {
  /**
   * Create a client for the Media Control Server specified by the given URI
   * @param  {String}   uri      The WebSocket URI of the Media Control Server
   */
  constructor (uri) {
    super();
    this.createConnection(uri);
  }

  deferTransaction (message) {
    SIPTransactionManager.addTransaction(message);
    this.send(message);
    return message.promise;
  }

  /*
   * TODO docs
   */
  onEvent (eventName, identifier, callback) {
    if (!eventName || typeof(eventName) !== 'string') {
      throw new Error('Error : invalid event name');
    }

    const message =
      new OnEvent(eventName, identifier);

    this._addEventCallback(eventName, identifier, callback);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  dial (roomId, uri, protocol) {
    if (!roomId || typeof(roomId) !== 'string') {
      throw new Error('Error : invalid room ID');
    }

    if (!uri || typeof uri !== 'string') {
      throw new Error('Error: invalid SIP URI');
    }

    if (!protocol || typeof protocol !== 'string') {
      throw new Error('Error: invalid protocol');
    }

    const message =
      new Dial(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  hangup (callId) {
    if (!callId || typeof(callId) !== 'string') {
      throw new Error('Error : invalid callId ');
    }

    const message =
      new Hangup(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  dtmf (callId, digit) {
    if (!callId || typeof(callId) !== 'string') {
      throw new Error('Error : invalid callId ');
    }

    if (!digit || typeof digit !== 'number') {
      throw new Error('Error: invalid digit');
    }

    const message =
      new DTMF(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  register (registrar, bindings) {
    if (!registrar || typeof(registrar) !== 'string') {
      throw new Error('Error : invalid registrar address');
    }

    if (!bindings || !Array.isArray(bindings) || bindings.length <= 0) {
      throw new Error('Error: invalid bindings array');
    }

    bindings.forEach(b => {
      if (typeof b !== 'string') {
        throw new Error('Error: invalid binding format');
      }
    });

    const message =
      new Register(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  unregister (registrar, bindings) {
    if (!registrar || typeof(registrar) !== 'string') {
      throw new Error('Error : invalid registrar address');
    }

    if (!bindings || !Array.isArray(bindings) || bindings.length <= 0) {
      throw new Error('Error: invalid bindings array');
    }

    bindings.forEach(b => {
      if (typeof b !== 'string') {
        throw new Error('Error: invalid binding format');
      }
    });

    const message =
      new Unregister(...arguments);

    if (message) {
      return this.deferTransaction(message);
    }
  }
}

/**
 * @ignore
 */
SIPClient.prototype.send;

/**
 * @ignore
 */
SIPClient.prototype.createConnection;

module.exports = SIPClient;
