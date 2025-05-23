import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v4 as uuid } from 'uuid';
@Injectable()
export class S3Servie extends S3Client {
  private bucketName: string;
  private s3_region: string;
  constructor(private readonly configService: ConfigService) {
    super();
    this.initConfig = {
      region: this.configService.get<string>('AWS_S3_REGION') as string,
      credentials: {
        accessKeyId: this.configService.get<string>(
          'AWS_S3_ACCESS_KEY_ID',
        ) as string,
        secretAccessKey: this.configService.get<string>(
          'AWS_S3_SECRET_ACCESS_KEY',
        ) as string,
      },
    };
    this.bucketName = this.configService.get<string>(
      'AWS_S3_BUCKET_NAME',
    ) as string;
    this.s3_region = this.configService.get<string>('AWS_S3_REGION') as string;
  }
  async uploadFile(file: Express.Multer.File, prefix: string) {
    const fileName = `${prefix}/${uuid()}`;
    const cmd = this.sendFileCommand(file, prefix);
    const response = await this.send(cmd);
    const {
      $metadata: { httpStatusCode },
    } = response;
    if (httpStatusCode === 200) {
      return true;
    }
  }

  sendFileCommand(file: Express.Multer.File, fileName: string) {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: fileName,
      Body: file.buffer,
      ContentType: file.mimetype,
    });
    return command;
  }
  async getFileCommand() {}
}
