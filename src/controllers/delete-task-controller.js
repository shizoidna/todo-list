'use strict';

class DeleteTaskController {

  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  deleteTask(id) {
    this.tasksRepository.delete(id);
  }
}
