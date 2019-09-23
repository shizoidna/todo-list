'use  strict';

class UndoView {
  constructor(undoTasksController) {
    this.undoTasksController = undoTasksController;
  }

  addEventHandler() {
    const buttonUndo = document.getElementById('button-undo');
    buttonUndo.addEventListener('click', this.onClickUndoTasks);
  }

  onClickUndoTasks() {
    this.undoTasksController.undoTasks();
  }
}
