'use strict';

let instance = null;

const TM = class SIPTransactionManager {
  constructor() {
    if (instance == null) {
      this.transactions = {};
      instance = this;
    }

    return instance;
  }

  transaction (id) {
    return this.transactions[id];
  }

  addTransaction (transaction) {
    const { transactionId } = transaction;
    this.transactions[transactionId] = transaction;
  }

  resolveTransaction (id, response) {
    const t = this.transaction(id);
    if (t) {
      t.resolve(response);
      delete this.transactions[id];
    }
  }

  rejectTransaction (id, response) {
    const t = this.transaction(id);
    if (t) {
      t.reject(response);
      delete this.transactions[id];
    }
  }
}

module.exports = new TM();
