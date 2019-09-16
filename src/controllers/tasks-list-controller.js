'use strict';

class TasksListController {

  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
  }

  getList() {
    this.tasksRepository.getList();
  }

  changeIsDone(id, value) {
    this.tasksRepository.update(id, undefined, value);
  }
}
