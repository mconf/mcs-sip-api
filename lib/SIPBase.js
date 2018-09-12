'use strict';

const EventEmitter = require('events');

/**
 * Base Class for Media Control Server
 * @extends external:EventEmitter
 * @memberof module:mcs-sip-api
 */
class SIPBase extends EventEmitter {
  constructor () {
    super();
  }
}

module.exports = SIPBase;
