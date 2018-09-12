'use strict';
/**
 * mcs-sip-api: A simple client/server library for Media Control Server
 * @module mcs-sip-api
 */
const SIPAPI= require('./lib/SIPClient');

SIPAPI.prototype.name = 'mcs-sip-api';
SIPAPI.prototype.version = '0.0.1-dev';

var Server = require('./lib/SIPServer');

SIPAPI.Server = Server;
module.exports = SIPAPI;
