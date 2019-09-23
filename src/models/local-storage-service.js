'use strict';

export class LocalStorageService {
  getByKey(key) {
    const value = localStorage.getItem(key);

    return this._deserialize(value);
  }

  setByKey(key, value) {
    const serializedValue = this._serialize(value);

    localStorage.setItem(key, serializedValue);
  }

  _serialize(value) {
    return JSON.stringify(value);
  }

  _deserialize(value) {
    return JSON.parse(value);
  }
}


