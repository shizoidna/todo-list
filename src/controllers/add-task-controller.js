'use strict';

class AddTaskController{

  constructor(tasksRepository, eventBusService) {
    this.tasksRepository = tasksRepository;
    this.eventBusService = eventBusService;
  }

  addTask(message) {
    this.tasksRepository.create(message, false);
    this.eventBusService.publish('AddTask', {message});
  }
}
