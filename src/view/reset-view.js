'use strict';

export class ResetView {
  constructor(resetTasksController) {
    this.resetTasksController = resetTasksController;
  }

  resetTasks() {
    this.resetTasksController.resetTasks();
  }
}

