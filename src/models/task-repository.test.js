import "./local-storage-service";
import "./tasks-repository";

describe('TaskRepository', () => {
  test('getList', () => {
    const storageService = new LocalStorageService();
    const taskRepository = new TasksRepository(storageService);
    const taskList = [{id:1, message: 'wash dish', isDone:false}];

    storageService.setByKey('toDoList', taskList);

    const list = taskRepository.getList();

    expect(list).toEqual(taskList);
  });
});
