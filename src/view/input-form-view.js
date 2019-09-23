'use strict';

export class InputFormView {
  constructor(addTaskController) {
    this.addTaskController = addTaskController;
  }

  init() {
    this._addEventHandler();
  }

  _addEventHandler() {
    const formAddTask = document.getElementById('form-add-task');
    formAddTask.addEventListener('submit', this.onClickAdd.bind(this));
  }

  onClickAdd(action) {
    action.preventDefault();


    const inputField = document.getElementById('new-task');
    const message = inputField.value;
    if (message !== '') {
      this.addTaskController.addTask(message);
      inputField.value = '';
    } else {
      alert('write a proper name of task');
    }
  }
}

