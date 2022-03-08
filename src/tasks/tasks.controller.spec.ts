import { Test, TestingModule } from '@nestjs/testing';
import { TasksController } from './tasks.controller';
import { TasksRepository } from './tasks.repository';
import { TasksService } from './tasks.service';

describe('TasksController', () => {
  let controller: TasksController;
  const mockTasksService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasksController],
      providers: [TasksService, TasksRepository],
    })
      .overrideProvider(TasksService)
      .useValue(mockTasksService)
      .compile();

    controller = module.get<TasksController>(TasksController);
  });

  it('should create a task', () => {
    expect(
      controller.createTask({
        title: 'Clean my room',
        description: 'Clean my room properly',
      }),
    ).toEqual({
      id: expect.any(Number),
      title: 'Clean my room',
      description: 'Clean my room properly',
      status: 'OPEN',
    });
  });
});
