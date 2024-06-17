// app.module.ts
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ActiveChannelsModule } from './components/activechannels/activechannels.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.mongodburi),
    ActiveChannelsModule,
  ],
})
export class AppModule {}
