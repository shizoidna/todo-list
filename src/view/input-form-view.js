'use strict';

class InputFormView {
  constructor(addTaskController) {
    this.addTaskController = addTaskController;
    this._addEventHandler();
  }

  _addEventHandler() {
    const formAddTask = document.getElementById('form-add-task');
    formAddTask.addEventListener('submit', this.onClickAdd.bind(this));
  }

  onClickAdd(action) {
    action.preventDefault();

    const message = document.getElementById('new-task').value;
    if (message !== '') {
      this.addTaskController.addTask(message);
    } else {
      alert('write a proper name of task');
    }
  }
}

