import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KickoffModule } from './kickoff/kickoff.module';
import { Client } from './kickoff/entities/clients.entity';
import { Company } from './kickoff/entities/companies.entity';
import { Kickoff } from './kickoff/entities/kickoff.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Overload2026',
      database: 'teste_db',
      entities: [Client, Company, Kickoff],
      autoLoadEntities: true,
      synchronize: true,
    }),
    KickoffModule,
  ],
})
export class AppModule {}
