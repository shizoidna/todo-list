'use strict';

import {InputFormView} from '../view/input-form-view';

export class AddTaskController {
  constructor(tasksRepository, eventBusService) {
    this.tasksRepository = tasksRepository;
    this.eventBusService = eventBusService;
    this.inputFormView = new InputFormView(this);
  }

  init() {
    this.inputFormView.init();
  }

  addTask(message) {
    this.tasksRepository.create(message, false);
    this.eventBusService.publish('AddTask', {message});
  }
}
