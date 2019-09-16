'use strict';

class ResetTasksController {

  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  resetTasks() {
    this.tasksRepository.resetList();
  }
}
