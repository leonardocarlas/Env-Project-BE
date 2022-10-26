import { Test, TestingModule } from '@nestjs/testing';
import { PollutedPointsController } from './polluted-points.controller';
import { PollutedPointsService } from './polluted-points.service';

describe('PollutedPointsController', () => {
  let controller: PollutedPointsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PollutedPointsController],
      providers: [PollutedPointsService],
    }).compile();

    controller = module.get<PollutedPointsController>(PollutedPointsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
