import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {House} from 'src/Domain/House/House.entity';
import {Voucher} from 'src/Domain/House/Voucher.entity';
import {BusModule} from '../bus.module';
import {HouseRepository} from './Repository/HouseRepository';
import {VoucherRepository} from './Repository/VoucherRepository';

@Module({
  imports: [BusModule, TypeOrmModule.forFeature([House, Voucher])],
  controllers: [],
  providers: [
    {provide: 'IHouseRepository', useClass: HouseRepository},
    {provide: 'IVoucherRepository', useClass: VoucherRepository}
  ]
})
export class HouseModule {}
