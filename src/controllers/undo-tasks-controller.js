'use strict';

import {UndoView} from '../view/undo-view';

export class UndoTasksController {
  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
    this.undoView = new UndoView(this);
  }

  undoTasks() {
    this.tasksRepository.restoreBackup();
  }

  init() {

  }
}
