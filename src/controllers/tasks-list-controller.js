'use strict';

import {ListView} from '../view/list-view';

export class TasksListController {
  constructor(tasksRepository, eventBusService) {
    this.tasksRepository = tasksRepository;
    this.eventBusService = eventBusService;
    this.listView = new ListView(this);
  }

  init() {
    this.eventBusService.subscribe('AddTask', () => this.listView.renderList());
    this.listView.renderList();
  }

  getList() {
    return this.tasksRepository.getList();
  }

  changeIsDone(id, value) {
    this.tasksRepository.update(id, {isDone: value});
  }

  deleteTask(id) {
    this.tasksRepository.delete(id);
    this.listView.renderList();
  }
}
