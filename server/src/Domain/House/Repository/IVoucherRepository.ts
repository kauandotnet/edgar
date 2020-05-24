import {Voucher} from '../Voucher.entity';
import {House} from '../House.entity';

export interface IVoucherRepository {
  save(voucher: Voucher): Promise<Voucher>;
  findOneByCode(code: string): Promise<Voucher | undefined>;
  findByHouse(house: House): Promise<[Voucher[], number]>;
  remove(voucher: Voucher): Promise<void>;
}
