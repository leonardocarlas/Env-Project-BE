import { Module } from '@nestjs/common';
import { PollutedPointsService } from './polluted-points.service';
import { PollutedPointsController } from './polluted-points.controller';

@Module({
  controllers: [PollutedPointsController],
  providers: [PollutedPointsService]
})
export class PollutedPointsModule {}
