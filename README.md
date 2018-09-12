# A client-server API library for communication with MCS-SIP

# API specification
## Inbound requests (* -> MCS-SIP)
- dial
     - @param {String} room
     - @param {String} uri
     - @param {String} protocol
     - @return {String} callId

- hangup
     - @param {String} callId

## Outbound methods (MCS-BFCP -> MCS-SIP)
- dialStateChanged
     - @param {String} callId
     - @param {String} state

## Inbound and outbound events:
- dtmf
     - @param {String} callId
     - @param {Number} digit
