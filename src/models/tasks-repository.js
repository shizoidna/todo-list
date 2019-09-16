'use strict';

class TasksRepository {
  _key = 'toDoList';
  _keyBackup = `${this._key}Backup`;


  constructor(storageService) {
    this.storageService = storageService;
  }

  getList() {
    return this.storageService.getByKey(this._key) || [];
  }

  /**
   * Create a new task.
   * @param {string} message
   * @param {Object} [payload={isDone: false}]
   */
  create(message, payload = {}) {
    checkArgumentsDefinedHelper([message]);
    const def = {isDone: false};
    const updatedPayload = {...def,...payload};

    this._makeBackup();

    const list = this.getList();
    const newTasks = [...list, {id: this._generateId(), message: message, isDone: updatedPayload.isDone}];
    this._saveList(newTasks);
  }

  /**
   * Update task
   * @param {string} id
   * @param {Object} [payload={message: '', isDone: false}]
   */
  update(id, payload) {
    checkArgumentsDefinedHelper([id,payload]);

    this._makeBackup();

    const list = this.getList(this._key);
    const currentTask = list.find((element) => element.id === id);

    if (currentTask === undefined) {
      throw new Error('Cannot find value');
    }

    //if(payload.isDone !== undefined || payload.message !== undefined)
    if (payload.isDone !== undefined) {
      currentTask.isDone = payload.isDone;
    }

    if (payload.message !== undefined) {
      currentTask.message = payload.message;
    }

    this._saveList(list);
  }

  delete(id) {
    checkArgumentsDefinedHelper([id]);
    this._makeBackup();

    const list = this.getList();

    const updatedList = list.filter((task) => {
      return id !== task.id;
    });

    this._saveList(updatedList);
  }

  resetList() {
    this._makeBackup();

    this._saveList([]);
  }

  restoreBackup() {
    const list = this._getBackupList();
    this._saveList(list);
  }

  _makeBackup() {
    const list = this.getList();
    this._saveBackup(list);
  }

  /**
   * Generates id
   * @returns {string}
   * @private
   */
  _generateId() {
    return 'id' + Date.now();
  }

  _saveList(value) {
    this.storageService.setByKey(this._key, value);
  }

  _saveBackup(value) {
    this.storageService.setByKey(this._keyBackup, value)
  }

  _getBackupList() {
    return this.storageService.getByKey(this._keyBackup) || [];
  }

}



