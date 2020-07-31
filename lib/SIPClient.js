'use strict';

const SIPBaseClient = require('./SIPBaseClient');
const SIPTransactionManager = require('./SIPTransactionManager');

const OnEvent = require('./messages/onEvent');
const DTMF = require('./messages/dtmf');
const Create = require('./messages/create.js');
const Dial = require('./messages/dial');
const Hangup = require('./messages/hangup');
const Register = require('./messages/register');
const Unregister = require('./messages/unregister');
const GetCalls = require('./messages/getCalls');
const GetCallInfo = require('./messages/getCallInfo');

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
  create (roomId, uri) {
    if (!roomId || typeof(roomId) !== 'string') {
      throw new Error('Error : invalid room ID');
    }

    if (!uri || typeof uri !== 'string') {
      throw new Error('Error: invalid SIP URI');
    }

    const message =
      new Create(roomId, uri);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  dial (callId) {
    if (!callId || typeof(callId) !== 'string') {
      throw new Error('Error : invalid call ID');
    }

    const message =
      new Dial(callId);

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
      new Hangup(callId);

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

    if (!digit || (typeof digit !== 'string' && typeof digit !== 'number')) {
      throw new Error('Error: invalid digit');
    }

    const message =
      new DTMF(callId, digit);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  register (routeTo, bindings) {
    if (!routeTo || typeof routeTo !== 'string') {
      throw new Error('Error: invalid routeTo type');
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
      new Register(routeTo, bindings);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  unregister (bindings) {
    if (!bindings || !Array.isArray(bindings) || bindings.length <= 0) {
      throw new Error('Error: invalid bindings array');
    }

    bindings.forEach(b => {
      if (typeof b !== 'string') {
        throw new Error('Error: invalid binding format');
      }
    });

    const message =
      new Unregister(bindings);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  getCalls (roomId) {
    if (!roomId || typeof roomId !== 'string') {
      throw new Error('Error: invalid roomId');
    }

    const message =
      new GetCalls(roomId);

    if (message) {
      return this.deferTransaction(message);
    }
  }

  /**
   *  TODO docs
   */
  getCallInfo (id) {
    if (!id || typeof id !== 'string') {
      throw new Error('Error: invalid id');
    }

    const message =
      new GetCallInfo(id);

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
