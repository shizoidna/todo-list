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

  create(message) {
    const list = this.getList();
    const newTasks = [...list, {id: this._generateId(), message: message, isDone: false}];
    this._saveList(newTasks);
  }

  update(id, message, isDone) {
      const list = this.getList(this._key);
      const currentTask = list.find((element) => element.id === id);

      if(currentTask !== undefined){
        currentTask.isDone = isDone;
        currentTask.message = message;
        this._saveList(list);
      } else {
        this._saveList(list);
      }
  }

  delete(id) {
    const list = this.getList();

    const updatedList = list.filter((task) => {
      return id !== task.id;
    });

    this._saveList(updatedList);
  }

  resetList() {
    this._saveList([]);
  }

  makeBackup() {
    const list = this.getList();
    this._saveBackup(list);
  }

  restoreBackup() {
    const list = this._getBackupList();
    this._saveList(list);
  }

  _generateId() {
    return Date.now();
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



