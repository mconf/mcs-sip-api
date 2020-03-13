const C = {
  CALL_INFO: "callInfo",
  CALLS: "calls",
  CREATE: "create",
  CREATED: "created",
  DIAL: "dial",
  DIAL_RESPONSE: "dialResponse",
  DIAL_STATE_CHANGED: "dialStateChanged",
  DTMF: "dtmf",
  GET_CALL_INFO: "getCallInfo",
  GET_CALLS: "getCalls",
  HANGUP: "hangup",
  HANGUP_RESPONSE: "hangupResponse",
  ERROR: "errorMessage",
  ON_EVENT: "onEvent",
  REGISTER: "register",
  REGISTERED: "registered",
  UNREGISTER: "unregister",
  UNREGISTERED: "unregistered",
}

const EVENT_UNREGISTER_MAP = {
}

module.exports = {
  ...C,
  EVENT_UNREGISTER_MAP,
};
