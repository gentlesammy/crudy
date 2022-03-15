import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import {TodoModule} from "./todo/todo.module"
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import config from "./config/keys"

@Module({
  // ConfigModule.forRoot(), inside import
  imports: [TodoModule, MongooseModule.forRoot(config.dburi), AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
