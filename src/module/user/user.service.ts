import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/core/database/database.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly db: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const user = await this.db.user.create({
      data: createUserDto,
    });
    return user;
  }
}
