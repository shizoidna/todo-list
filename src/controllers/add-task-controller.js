'use strict';

class AddTaskController {

  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  addTasks(message) {
    this.tasksRepository.create(message, false);
  }
}
