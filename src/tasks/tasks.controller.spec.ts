import { Test, TestingModule } from '@nestjs/testing';
import { Task } from './task.entity';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService, TasksRepository],
    }).compile();

    controller = module.get<TasksController>(TasksController);
    service = module.get<TasksService>(TasksService);
  });

  describe('findAllTasks', () => {
    it('should return an array of tasks', async () => {
      let result: Promise<Task[]>;
      jest.spyOn(service, 'getTasks').mockImplementation(() => result);
      expect(await controller.getTasks({})).toBe(result);
    });
  });
});
