'use  strict';

export class UndoView {
  constructor(undoTasksController) {
    this.undoTasksController = undoTasksController;
    this.addEventHandler();
  }

  addEventHandler() {
    const buttonUndo = document.getElementById('button-undo');
    buttonUndo.addEventListener('click', this.onClickUndoTasks);
  }

  onClickUndoTasks() {
    this.undoTasksController.undoTasks();
  }
}
