import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {IVoucherRepository} from 'src/Domain/House/Repository/IVoucherRepository';
import {Voucher} from 'src/Domain/House/Voucher.entity';
import {House} from 'src/Domain/House/House.entity';

@Injectable()
export class VoucherRepository implements IVoucherRepository {
  constructor(
    @InjectRepository(Voucher)
    private readonly repository: Repository<Voucher>
  ) {}

  public save = async (voucher: Voucher): Promise<Voucher> => {
    return await this.repository.save(voucher);
  };

  public findOneByCode = async (code: string): Promise<Voucher | null> => {
    return await this.repository
      .createQueryBuilder('voucher')
      .select(['voucher.code', 'house.id'])
      .where('voucher.code = :code', {code})
      .innerJoin('voucher.house', 'house')
      .getOne();
  };

  public findByHouse = (house: House): Promise<[Voucher[], number]> => {
    return this.repository
      .createQueryBuilder('voucher')
      .select(['voucher.code', 'voucher.username', 'voucher.role'])
      .where('voucher.house = :house', {house: house.getId()})
      .getManyAndCount();
  };

  public remove = (voucher: Voucher): void => {
    this.repository.remove(voucher);
  };
}
