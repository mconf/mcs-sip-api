'use strict';

if (typeof WebSocket === 'undefined') {
  var ws = require('ws');
} else {
  var ws = WebSocket;
}

const SIPReceiver = require('./messages/SIPReceiver');
const SIPSender = require('./messages/SIPSender');
const SIPBase = require('./SIPBase');
const C = require('./constants');

/**
 * This class handles basic functionality for the SIP client
 * @extends {module:mcs-sip-api.SIPBase} SIPBase
 * @memberof module:mcs-sip-api
 * @fires {@link module:mcs-sip-api#event:open open}
 */
class SIPBaseClient extends SIPBase {
/**
 * Create a basic SIP client
 * @param {external:WebSocket} [ws] An existent WebSocket connection
 */
  constructor (ws) {
    super();
    this._setupConnection(ws);
    this.eventCallbacks = {};
  }

  /**
   * Send message over the existing connection
   * @param  {module:mcs-sip-api.SIPMessage} message The current message
   */
  send(message) {
    this._sender.sendMessage(message);
  }

  /**
   * Creates a new WebSocket connection
   * @param  {String} uri The WebSocket URI of the Media Control Server
   */
  createConnection(uri) {
    var websocket = new ws(uri);
    this._setupConnection(websocket);
  }

  /**
   * Close current WebSocket connection
   */
  closeConnection() {
    var _self = this;
    if (_self._ws) {
      _self._ws.close();
    }
  }

  _setupConnection(ws) {
    var _self = this;
    try {
      if (ws && typeof(ws) === 'object') {
        if (ws.readyState === ws.OPEN) {
          _self._initReceivers(ws);
        } else {
          ws.addEventListener('open', function () {
            _self._initReceivers(ws);
          });

          ws.addEventListener('close', () => {
            _self.emit('close');
          });

          ws.addEventListener('error', (error) => {
            _self.emit('error', error);
          });
        }
        _self._ws = ws;
      }
    } catch (error) {
      _self.emit('error', error);
    }
  }

  _initReceivers (client) {
    var _self = this;
    _self._initReceiver(client);
    _self._initSender(client);
    _self.emit('open');
  }

  _initReceiver(client) {
    const receiver = new SIPReceiver(client);

    receiver.on('api', (name, args) => {
      this.emit(name, args);
      this._triggerCallback(name, args);
      this._unregisterEvents(name, args);
    });
  }

  _initSender(client) {
    this._sender = new SIPSender(client);
  }

  _addEventCallback(eventName, identifier, callback) {
    if (this.eventCallbacks[eventName] == null) {
      this.eventCallbacks[eventName] = [];
    }

    this.eventCallbacks[eventName].push({ identifier, callback });
  }

  _unregisterEvents (eventName, args) {
    const eventsToUnregister = C.EVENT_UNREGISTER_MAP[eventName];
    if (eventsToUnregister) {
      eventsToUnregister.forEach(etuName => {
        let registry = this.eventCallbacks[etuName];
        if (registry) {
          let etuIdentifier = this._getValidIdentifier(etuName, args);
          this.eventCallbacks[etuName] = registry.filter(e => e.identifier !== etuIdentifier);
        }
      });
    }
  }

  _triggerCallback(eventName, args) {
    const eventRegistry = this.eventCallbacks[eventName];
    if (eventRegistry) {
      const identifier = this._getValidIdentifier(eventName, args);
      eventRegistry
        .filter(e => e.identifier === identifier)
        .forEach(e => {
          e.callback(args)
        });
    }
  }

  _getValidIdentifier(eventName, payload) {
    const { callId } = payload;
    let identifier;
    switch (eventName) {
      case C.DIAL_STATE_CHANGED:
        identifier = callId;
        break;
    }
    
    return identifier;
  }
}

module.exports = SIPBaseClient;
