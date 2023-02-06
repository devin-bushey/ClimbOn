import 'dotenv/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import * as path from 'path';
import { AppController } from './app.controller';

const envPath = path.resolve(process.cwd() + '../');

console.log('process.env.POSTGRES_HOST', process.env.POSTGRES_HOST);
console.log('process.env.POSTGRES_DB', process.env.POSTGRES_DB);
console.log('process.env.POSTGRES_USER', process.env.POSTGRES_USER);

@Module({
  imports: [
    //ConfigModule.forRoot({ envFilePath: `${envPath}/.env` }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: 5432,
      database: process.env.POSTGRES_DB,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      // entities: [User],
      autoLoadEntities: true, // Auto load all entities regiestered by typeorm forFeature method.
      synchronize: false, // This changes the DB schema to match changes to entities, which we might not want.
      logging: false,
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
