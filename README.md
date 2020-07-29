# A client-server API library for communication with MCS-SIP

# API specification
## Inbound requests (* -> MCS-SIP)
- create
     - @param {String} roomId
     - @param {String} uri
     - @return {String} callId

- dial
     - @param {String} callId
     - @return {String} callId

- hangup
     - @param {String} callId
     - @return {String} callId
     - @return {String} state

- register
     - @param {String} routeTo
     - @param {String} bindings
     - @return {String} bindings

- unregister
     - @param {String} bindings
     - @return {String} bindings

- getCalls
     - @param {String} roomId
     - @return {Array<Object>} calls

- getCallInfo
     - @param {String} callId
     - @return {Object} callInfo

## Outbound methods (MCS-SIP -> *)
- dialStateChanged
     - @param {String} callId
     - @param {String} state

## Inbound and outbound events:
- dtmf
     - @param {String} callId
     - @param {Number} digit
