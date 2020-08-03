'use strict';

const SIPBaseClient = require('./SIPBaseClient');
const Created = require('./messages/created');
const DialResponse = require('./messages/dialResponse');
const HangupResponse = require('./messages/hangupResponse');
const DialStateChanged = require('./messages/dialStateChanged');
const Registered = require('./messages/registered');
const Unregistered = require('./messages/unregistered');
const Calls = require('./messages/calls');
const CallInfo = require('./messages/callInfo');
const ErrorResponse = require('./messages/error.js');
const DTMFSent = require('./messages/dtmfSent.js');

/**
 * This class represents a client in server's context. It is used to
 * send/receive data from a single client
 * @extends module:mcs-sip-api.SIPBaseClient
 * @memberof module:mcs-sip-api
 * @fires {@link module:mcs-sip-api#event:join join}
 */
class SIPResponseClient extends SIPBaseClient {
  /**
   * Create a client for the Media Control Server given an existent connection
   * @param {external:WebSocket} [ws] An existent WebSocket connection
   */
  constructor(ws) {
    super(ws);
    this._id = ws && ws.req && ws.req.headers ?
      ws.req.headers['sec-websocket-key'] : null;
  }

  /**
   * Return the current client's ID
   * @return {String} The id of this client
   */
  get id() {
    return this._id;
  }

  created (uri, callId, options) {
    if (!uri || typeof (uri) !== 'string') {
      throw new Error('Error : Invalid SIP URI');
    }

    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    const message = new Created(uri, callId, options);
    if (message) {
      this.send(message);
    }
  }

  // TODO docs
  dialResponse (callId, options) {
    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    const message = new DialResponse(callId, options);
    if (message) {
      this.send(message);
    }
  }

  // TODO docs
  hangupResponse (callId, state, options) {
    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    if (!state || typeof (state) !== 'string') {
      throw new Error('Error : Invalid hangup call state');
    }

    const message = new HangupResponse(callId, state, options);
    if (message) {
      this.send(message);
    }
  }

  // TODO docs
  dialStateChanged (callId, state) {
    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    if (!state || typeof (state) !== 'object') {
      throw new Error('Error : Invalid call state');
    }

    const message = new DialStateChanged(callId, state);
    if (message) {
      this.send(message);
    }
  }

  /**
   *  TODO docs
   */
  registered (bindings, options) {
    if (!bindings || !Array.isArray(bindings)) {
      throw new Error('Error: invalid bindings array');
    }

    bindings.forEach(b => {
      if (typeof b !== 'string') {
        throw new Error('Error: invalid binding format');
      }
    });

    const message = new Registered(bindings, options);
    if (message) {
      return this.send(message);
    }
  }

  /**
   *  TODO docs
   */
  unregistered (bindings, options) {
    if (!bindings || !Array.isArray(bindings)) {
      throw new Error('Error: invalid bindings array');
    }

    bindings.forEach(b => {
      if (typeof b !== 'string') {
        throw new Error('Error: invalid binding format');
      }
    });

    const message = new Unregistered(bindings, options);
    if (message) {
      return this.send(message);
    }
  }

  callList (calls, options) {
    if (!calls || !Array.isArray(calls)) {
      throw new Error('Error: invalid calls array');
    }

    const message = new Calls(calls, options);
    if (message) {
      return this.send(message);
    }
  }

  callInfo (info, options) {
    if (!info || typeof info !== 'object') {
      throw new Error('Error: invalid callInfo object');
    }

    const message = new CallInfo(info, options);
    if (message) {
      return this.send(message);
    }
  }

  dtmfSent (callId, tone, options) {
    if (!callId|| typeof callId !== 'string') {
      throw new Error('Error: invalid callId');
    }

    if (!tone|| (typeof tone !== 'string' && typeof tone !== 'number')) {
      throw new Error('Error: invalid tone');
    }

    const message = new DTMFSent(callId, tone, options);
    if (message) {
      return this.send(message);
    }
  }

  error (response, options) {
    if (!response || typeof (response) !== 'object') {
      throw (new Error('invalid error response'));
    }

    const message = new ErrorResponse(response, options);

    if (message) {
      this.send(message);
    }
  }
}

/**
 * @ignore
 */
SIPResponseClient.prototype.send; // jshint ignore:line

/**
 * @ignore
 */
SIPResponseClient.prototype.createConnection; // jshint ignore:line

module.exports = SIPResponseClient;
