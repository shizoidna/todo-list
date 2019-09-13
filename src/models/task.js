'use strict';

class Task {
  _maxLength = 250;

  constructor(id, message, isDone) {
    this.id = id;
    this.message = message;
    this.isDone = isDone;
  }

  validate() {
    if (this.message.length >= this._maxLength) {
      return `Message length should be less than ${this._maxLength}`;
    } else {
      return this.message.length;
    }
  }
}

