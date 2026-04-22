import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { KickoffService } from './kickoff.service';
import { CreateKickoffDto } from './dto/create-kickoff.dto';

@Controller('kickoff')
export class KickoffController {
  constructor(private readonly service: KickoffService) {}

  @Post()
  async create(@Body() body: CreateKickoffDto) {
    return this.service.create(body);
  }

  @Get()
  async findAll() {
    return this.service.findAll();
  }

  @Get('full')
  async findAllDetailed() {
    return this.service.findAllDetailed();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOneFull(id);
  }
}
