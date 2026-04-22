import { Module } from '@nestjs/common';
import { KickoffController } from './kickoff.controller';
import { KickoffService } from './kickoff.service';

@Module({
  controllers: [KickoffController],
  providers: [KickoffService],
})
export class KickoffModule {}
