'use strict';

const WebSocket = require('ws');
const SIPBase = require('./SIPBase');
const SIPResponseClient = require('./SIPResponseClient');

/**
 * This class handles basic functionality for the SIP server
 * @extends module:mcs-sip-api.SIPBase
 * @memberof module:mcs-sip-api
 * @fires {@link module:mcs-sip-api#event:connection connection}
 */
class SIPBaseServer extends SIPBase {

  /**
   * Create a basic instance of SIP specified by the given options
   * @param  {external:WebSocketServerOptions} options Server options
   */
  constructor (options) {
    super();
    var _self = this;
    var ws = new WebSocket.Server(options);
    var connectionTimeout = options.connectionTimeout ? options.connectionTimeout : 30000;

    ws.on('connection', (wsclient, req) => {
      wsclient.req = req; // ws 3.0+
      var mcsClient = new SIPResponseClient(wsclient);
      mcsClient._ws.on('close', function () {
        mcsClient.emit('close');
      });

      // used to detect connection loss
      mcsClient._ws.isAlive = true;
      mcsClient._ws.on('pong', function () {
        mcsClient._ws.isAlive = true;
      });

      _self.emit('connection', mcsClient);
    });

    ws.on('close', () => {
      _self.emit('close');
    });

    //check connection status
    const interval = setInterval(function ping() {
      for (let client of ws.clients) {
        if (client.isAlive === false) {
          return client.terminate();
        }
        client.isAlive = false;
        client.ping(this.noop);
      };
    }, connectionTimeout);
    _self._ws = ws;
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

  noop() {}
}

module.exports = SIPBaseServer;
