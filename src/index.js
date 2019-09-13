const storageService = new LocalStorageService();
const taskRepository = new TasksRepository(storageService);

console.log(taskRepository.delete(1568364887912));


