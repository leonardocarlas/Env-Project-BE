import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiariesModule } from './apiaries/apiaries.module';
import { PollutedPointsModule } from './polluted-points/polluted-points.module';

@Module({
  imports: [ApiariesModule, PollutedPointsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
