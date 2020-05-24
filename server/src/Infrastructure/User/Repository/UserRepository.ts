import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {IUserRepository} from 'src/Domain/User/Repository/IUserRepository';
import {User} from 'src/Domain/User/User.entity';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {}

  public findOneByApiToken = (apiToken: string): Promise<User | null> => {
    return this.repository
      .createQueryBuilder('user')
      .select([
        'user.id',
        'user.firstName',
        'user.lastName',
        'user.email',
        'currentHouse.id',
        'currentHouse.name'
      ])
      .where('user.apiToken = :apiToken', {apiToken})
      .leftJoin('user.currentHouse', 'currentHouse')
      .getOne();
  };

  public findOneByEmail = (email: string): Promise<User | null> => {
    return this.repository
      .createQueryBuilder('user')
      .select([
        'user.firstName',
        'user.lastName',
        'user.email',
        'user.apiToken',
        'user.password',
        'house.id',
        'house.name'
      ])
      .where('user.email = :email', {email})
      .innerJoin('user.currentHouse', 'house')
      .getOne();
  };

  public save = (user: User): Promise<User> => {
    return this.repository.save(user);
  };
}
