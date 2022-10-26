import { Test, TestingModule } from '@nestjs/testing';
import { PollutedPointsService } from './polluted-points.service';

describe('PollutedPointsService', () => {
  let service: PollutedPointsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PollutedPointsService],
    }).compile();

    service = module.get<PollutedPointsService>(PollutedPointsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
