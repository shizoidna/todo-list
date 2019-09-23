'use strict';

class TasksListController {
  constructor(tasksRepository, listView, eventBusService) {
    this.tasksRepository = tasksRepository;
    this.listView = listView;
    this.eventBusService = eventBusService;

    this.eventBusService.subscribe('AddTask', this.listView.renderList);
  }

  getList() {
    return this.tasksRepository.getList();
  }

  changeIsDone(id, value) {
    this.tasksRepository.update(id, {isDone: value});
  }

  deleteTask(id) {
    this.tasksRepository.delete(id);
  }
}
