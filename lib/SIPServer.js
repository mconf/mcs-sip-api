'use strict';

const SIPBaseServer = require('./SIPBaseServer');

/**
 * This class represents a server instance for Media Control Server API
 * @extends module:mcs-sip-api.SIPBaseServer
 * @memberof module:mcs-sip-api
 * @fires {@link module:mcs-sip-api#event:connection connection}
 */
class SIPServer extends SIPBaseServer {
  /**
   * Create a server instance of SIP specified by the given options
   * @param  {external:WebSocketServerOptions} options Server options
   */
  constructor (options) {
    super(options);
  }
}

module.exports = SIPServer;
