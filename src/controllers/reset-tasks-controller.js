'use strict';

import {ResetView} from '../view/reset-view';

export class ResetTasksController {

  constructor(tasksRepository) {
    this.tasksRepository = tasksRepository;
    this.resetView = new ResetView(this);
  }

  resetTasks() {
    this.tasksRepository.resetList();
  }

  init() {

  }
}
