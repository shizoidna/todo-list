const storageService = new LocalStorageService();
const tasksRepository = new TasksRepository(storageService);
const eventBusService = new EventBusService();
const addTaskController = new AddTaskController(tasksRepository, eventBusService);
const resetTasksController = new ResetTasksController(tasksRepository);
const tasksListController = new TasksListController(tasksRepository);
const undoTasksController = new UndoTasksController(tasksRepository);
const inputFormView = new InputFormView(addTaskController);
const listView = new ListView(tasksListController);
const resetView = new ResetView(resetTasksController);
const undoView = new UndoView(undoTasksController);


// tasksRepository.update('id1568817184939', {isDone: true});

listView.renderList();
