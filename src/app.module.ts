// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { ActiveChannelsModule } from './components/activechannels/activechannels.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongodburi),
    ActiveChannelsModule,
  ],
  controllers:[AppController],
  providers:[AppService]
})
export class AppModule {}
