import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}
  createUser({
    firstName,
    lastName,
    email,
  }: CreateUserDto): Promise<UserEntity> {
    return this.userRepository.save({
      firstName,
      lastName,
      email,
    });
  }
}
