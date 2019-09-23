'use strict';

class EventBusService {
  constructor() {
    this._topics = {};
  }

  publish(topic, payload) {
    const currentTopic = this._topics[topic];
    if (currentTopic !== undefined) {
      currentTopic.forEach((fn) => fn(payload));
    }
  }

  subscribe(topic, callback) {
    if (this._topics[topic] === undefined) {
      this._topics[topic] = [];
    }
    this._topics[topic].push(callback);
  }
}
