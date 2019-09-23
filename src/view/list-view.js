'use strict';

class ListView {
  constructor(tasksListController) {
    this.tasksListController = tasksListController;
  }

  clearList() {
    const listElement = document.getElementById('tasks-list');
    listElement.innerHTML = '';
  }

  renderList() {
    this.clearList();
    this.tasksListController.getList().forEach((elem) => this._renderTask(elem));

    const checkboxesChecked = document.querySelectorAll('input.form-check-input-align-middle');
    checkboxesChecked.forEach((checkbox) => {
      checkbox.addEventListener('click', (action) => this.onClickMarkAsDone(action));
    });

    const buttonsDelete = document.querySelectorAll('button.button-delete');
    buttonsDelete.forEach((button) => {
      button.addEventListener('click', this.onClickDeleteTask.bind(this));
    });
  }

  onClickMarkAsDone(action) {
    const id = Number(action.target.dataset.id);
    this.tasksListController.changeIsDone(id, {isDone: true});
  }

  onClickDeleteTask(action) {
    const id = action.target.dataset.id;
    this.tasksListController.deleteTask(id);
    // makeButtonUndoEnabled();
    this.renderList();
  }

  _renderTask(task) {
    const listElement = document.getElementById('tasks-list');
    const li = document.createElement('li');

    li.innerHTML = `
      <div class="form-check pl-0"> 
        <input class="form-check-input-align-middle" type="checkbox" value="${task.isDone}"  data-id="${task.id}">
        <label class="form-check-label" for="${task.message}">
          ${task.message}
        </label>
        <button data-id="${task.id}" class="button-delete">Delete</button>
      </div>`;

    listElement.appendChild(li);
  }
}


