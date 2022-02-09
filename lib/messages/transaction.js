'use strict';

const { v4: uuidv4 } = require('uuid');

/**
 * Base transaction for the MCS API
 * @memberof module:mcs-sip-api
 */
class Transaction {
    /**
   * Creates a Transaction object
   */
  constructor (transactionId) {
    if (transactionId) {
      this.transactionId = transactionId;
      return;
    } else {
      this.transactionId = uuidv4();
      this.promise = new Promise((resolve, reject) => {
        let isResolved = false;
        this.resolveResponse = response => {
          if (!isResolved) {
            isResolved = true;
            return resolve(response);
          }
        };
        this.rejectResponse = response => {
          if (!isResolved) {
            isResolved = true;
            return reject(response);
          }
        }
      });
    }
  }

  resolve (response) {
    return this.resolveResponse(response);
  }

  reject (response) {
    return this.rejectResponse(response);
  }
}

module.exports = Transaction;
