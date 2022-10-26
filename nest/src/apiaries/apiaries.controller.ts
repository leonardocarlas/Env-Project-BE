import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiariesService } from './apiaries.service';
import { CreateApiaryDto } from './dto/create-apiary.dto';
import { UpdateApiaryDto } from './dto/update-apiary.dto';

@Controller('apiaries')
export class ApiariesController {
  constructor(private readonly apiariesService: ApiariesService) {}

  @Post()
  create(@Body() createApiaryDto: CreateApiaryDto) {
    return this.apiariesService.create(createApiaryDto);
  }

  @Get()
  findAll() {
    return this.apiariesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.apiariesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateApiaryDto: UpdateApiaryDto) {
    return this.apiariesService.update(+id, updateApiaryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.apiariesService.remove(+id);
  }
}
