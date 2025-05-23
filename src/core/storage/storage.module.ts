import { Global, Module } from '@nestjs/common';
import { S3Servie } from './s3/s3.service';

@Global()
@Module({
  providers: [S3Servie],
  exports: [S3Servie],
})
export class StorageModule {}
