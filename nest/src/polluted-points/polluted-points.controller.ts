import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PollutedPointsService } from './polluted-points.service';
import { CreatePollutedPointDto } from './dto/create-polluted-point.dto';
import { UpdatePollutedPointDto } from './dto/update-polluted-point.dto';

@Controller('polluted-points')
export class PollutedPointsController {
  constructor(private readonly pollutedPointsService: PollutedPointsService) {}

  @Post()
  create(@Body() createPollutedPointDto: CreatePollutedPointDto) {
    return this.pollutedPointsService.create(createPollutedPointDto);
  }

  @Get()
  findAll() {
    return this.pollutedPointsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pollutedPointsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePollutedPointDto: UpdatePollutedPointDto) {
    return this.pollutedPointsService.update(+id, updatePollutedPointDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollutedPointsService.remove(+id);
  }
}
