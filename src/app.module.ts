import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './module/user/user.module';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';
import { MovieModule } from './module/movie/movie.module';

@Module({
  imports: [UserModule, CoreModule, MovieModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
