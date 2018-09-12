'use strict';

const SIPBaseClient = require('./SIPBaseClient');
const DialResponse = require('./messages/dialResponse');
const HangupResponse = require('./messages/hangupResponse');
const DialStateChanged = require('./messages/dialStateChanged');

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

  // TODO docs
  dialResponse (uri, callId, params) {
    if (!uri || typeof (uri) !== 'string') {
      throw new Error('Error : Invalid SIP URI');
    }

    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    const message = new DialResponse(uri, callId, params);
    if (message) {
      this.send(message);
    }
  }

  // TODO docs
  hangupResponse (callId, state, params) {
    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    if (!state || typeof (state) !== 'string') {
      throw new Error('Error : Invalid hangup call state');
    }

    const message = new HangupResponse(callId, state, params);
    if (message) {
      this.send(message);
    }
  }

  // TODO docs
  dialStateChanged (callId, state) {
    if (!callId || typeof (callId) !== 'string') {
      throw new Error('Error : Invalid call ID');
    }

    if (!state || typeof (state) !== 'string') {
      throw new Error('Error : Invalid hangup call state');
    }

    const message = new DialStateChanged(uri, callId);
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
