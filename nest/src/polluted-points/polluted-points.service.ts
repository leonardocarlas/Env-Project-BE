import { Injectable } from '@nestjs/common';
import { CreatePollutedPointDto } from './dto/create-polluted-point.dto';
import { UpdatePollutedPointDto } from './dto/update-polluted-point.dto';

@Injectable()
export class PollutedPointsService {
  create(createPollutedPointDto: CreatePollutedPointDto) {
    return 'This action adds a new pollutedPoint';
  }

  findAll() {
    return `This action returns all pollutedPoints`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pollutedPoint`;
  }

  update(id: number, updatePollutedPointDto: UpdatePollutedPointDto) {
    return `This action updates a #${id} pollutedPoint`;
  }

  remove(id: number) {
    return `This action removes a #${id} pollutedPoint`;
  }
}
