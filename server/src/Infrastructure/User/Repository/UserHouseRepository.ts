import {Injectable} from '@nestjs/common';
import {Repository} from 'typeorm';
import {InjectRepository} from '@nestjs/typeorm';
import {UserHouse} from 'src/Domain/User/UserHouse.entity';
import {IUserHouseRepository} from 'src/Domain/User/Repository/IUserHouseRepository';
import {User} from 'src/Domain/User/User.entity';
import {House} from 'src/Domain/House/House.entity';

@Injectable()
export class UserHouseRepository implements IUserHouseRepository {
  constructor(
    @InjectRepository(UserHouse)
    private readonly repository: Repository<UserHouse>
  ) {}

  public save = async (userHouse: UserHouse): Promise<UserHouse> => {
    return await this.repository.save(userHouse);
  };

  public findOneByUserAndHouse = (
    user: User,
    house: House
  ): Promise<UserHouse | undefined> => {
    return this.repository
      .createQueryBuilder('userHouse')
      .select('userHouse.id')
      .where('userHouse.house = :house AND userHouse.user = :user', {
        user: user.getId(),
        house: house.getId()
      })
      .getOne();
  };

  public findOneByUserHouseRole = (
    user: User,
    house: House,
    role: string
  ): Promise<UserHouse | undefined> => {
    return this.repository
      .createQueryBuilder('userHouse')
      .select('userHouse.id')
      .where('userHouse.house = :house', {house: house.getId()})
      .andWhere('userHouse.user = :user', {user: user.getId()})
      .andWhere('userHouse.role = :role', {role})
      .getOne();
  };

  public findByUser = (user: User): Promise<[UserHouse[], number]> => {
    return this.repository
      .createQueryBuilder('userHouse')
      .select([
        'house.id',
        'house.name',
        'userHouse.role',
        'userHouse.createdAt'
      ])
      .where('userHouse.user = :user', {
        user: user.getId()
      })
      .innerJoin('userHouse.house', 'house')
      .getManyAndCount();
  };

  public findByHouse = (house: House): Promise<[UserHouse[], number]> => {
    return this.repository
      .createQueryBuilder('userHouse')
      .select([
        'user.id',
        'user.firstName',
        'user.email',
        'user.lastName',
        'userHouse.role'
      ])
      .where('userHouse.house = :house', {
        house: house.getId()
      })
      .innerJoin('userHouse.user', 'user')
      .getManyAndCount();
  };
}
