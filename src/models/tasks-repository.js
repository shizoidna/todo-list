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

      currentTask.isDone = isDone;
      currentTask.message = message;
      this._saveList(currentTask);
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

  _generateId() {
    return Date.now();
  }

  _saveList(value) {
    this.storageService.setByKey(this._key, value);
  }
}

