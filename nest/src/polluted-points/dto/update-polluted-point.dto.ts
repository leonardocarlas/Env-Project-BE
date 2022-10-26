import { PartialType } from '@nestjs/mapped-types';
import { CreatePollutedPointDto } from './create-polluted-point.dto';

export class UpdatePollutedPointDto extends PartialType(CreatePollutedPointDto) {}
