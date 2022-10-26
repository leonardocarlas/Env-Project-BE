import { Injectable } from '@nestjs/common';
import { CreateApiaryDto } from './dto/create-apiary.dto';
import { UpdateApiaryDto } from './dto/update-apiary.dto';

@Injectable()
export class ApiariesService {
  create(createApiaryDto: CreateApiaryDto) {
    return 'This action adds a new apiary';
  }

  findAll() {
    return `This action returns all apiaries`;
  }

  findOne(id: number) {
    return `This action returns a #${id} apiary`;
  }

  update(id: number, updateApiaryDto: UpdateApiaryDto) {
    return `This action updates a #${id} apiary`;
  }

  remove(id: number) {
    return `This action removes a #${id} apiary`;
  }
}
