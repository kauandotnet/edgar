import {IHouseRepository} from 'src/Domain/House/Repository/IHouseRepository';
import {House} from 'src/Domain/House/House.entity';
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';

@Injectable()
export class HouseRepository implements IHouseRepository {
  constructor(
    @InjectRepository(House)
    private readonly repository: Repository<House>
  ) {}

  public save = (house: House): Promise<House> => {
    return this.repository.save(house);
  };

  public find = (id: string): Promise<House | undefined> => {
    return this.repository
      .createQueryBuilder('house')
      .select(['house.id', 'house.name'])
      .where('house.id = :id', {id})
      .getOne();
  };
}
