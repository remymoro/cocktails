import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { UUID } from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findOneByEmail(email: string): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ email });
  }

  findOneById(id: UUID): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ id });
  }

  create(user: UserEntity): Promise<UserEntity> {
    return this.usersRepository.save(user);
  }

  update(
    userId: UUID,
    userInformation: Partial<UserEntity>,
  ): Promise<UpdateResult> {
    return this.usersRepository.update(userId, userInformation);
  }
}
