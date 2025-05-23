import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { StorageModule } from './storage/storage.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    StorageModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    DatabaseModule,
  ],
  providers: [],
  exports: [],
})
export class CoreModule {}
