import {LocalStorageService} from './models/local-storage-service';
import {TasksRepository} from './models/tasks-repository';
import {EventBusService} from './services/event-bus-service';
import {AddTaskController} from './controllers/add-task-controller';
import {ResetTasksController} from './controllers/reset-tasks-controller';
import {TasksListController} from './controllers/tasks-list-controller';
import {UndoTasksController} from './controllers/undo-tasks-controller';


const storageService = new LocalStorageService();
const tasksRepository = new TasksRepository(storageService);
const eventBusService = new EventBusService();
const addTaskController = new AddTaskController(tasksRepository, eventBusService);
const resetTasksController = new ResetTasksController(tasksRepository);
const tasksListController = new TasksListController(tasksRepository, eventBusService);
const undoTasksController = new UndoTasksController(tasksRepository);

tasksListController.init();
addTaskController.init();
//resetTasksController.init();
//undoTasksController.init();
