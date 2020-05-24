import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from 'src/Domain/User/User.entity';
import {UserHouse} from 'src/Domain/User/UserHouse.entity';
import {BusModule} from '../bus.module';
import {UserRepository} from './Repository/UserRepository';
import {UserHouseRepository} from './Repository/UserHouseRepository';

@Module({
  imports: [BusModule, TypeOrmModule.forFeature([User, UserHouse])],
  controllers: [],
  providers: [
    {provide: 'IUserRepository', useClass: UserRepository},
    {provide: 'IUserHouseRepository', useClass: UserHouseRepository}
  ]
})
export class UserModule {}
