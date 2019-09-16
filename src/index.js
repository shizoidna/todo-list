const storageService = new LocalStorageService();
const tasksRepository = new TasksRepository(storageService);
const addTaskController = new AddTaskController(tasksRepository);
const deleteTaskController = new DeleteTaskController(tasksRepository);
const resetTasksController = new ResetTasksController(tasksRepository);
const tasksListController = new TasksListController(tasksRepository);
const undoTasksController = new UndoTasksController(tasksRepository);

