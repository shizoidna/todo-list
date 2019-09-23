'use strict';

class UndoTasksController {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  undoTasks() {
    this.tasksRepository.restoreBackup();
  }
}
