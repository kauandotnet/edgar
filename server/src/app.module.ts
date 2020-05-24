import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UserModule} from './Infrastructure/User/user.module';
import {HouseModule} from './Infrastructure/House/house.module';

@Module({
  imports: [TypeOrmModule.forRoot(), UserModule, HouseModule]
})
export class AppModule {}
