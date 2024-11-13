import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodoModule } from './todo/todo.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: configService.getOrThrow('URI'),
      }),
      inject: [ConfigService],
    }),
    //MongooseModule.forRoot('mongodb://localhost:27017/'),

    TodoModule,
  ],
})
export class AppModule {}
