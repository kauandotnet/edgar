import {mock, instance} from 'ts-mockito';
import {Voucher} from './Voucher.entity';
import {Roles} from '../User/UserHouse.entity';
import {House} from './House.entity';
import {User} from '../User/User.entity';

describe('Voucher.entity', () => {
  it('testGetters', () => {
    const user = mock(User);
    const house = mock(House);
    const voucher = new Voucher(
      'x78hsKj',
      'Mathieu',
      Roles.OWNER,
      instance(house),
      instance(user)
    );

    expect(voucher.getId()).toBe(undefined);
    expect(voucher.getUsername()).toBe('Mathieu');
    expect(voucher.getCode()).toBe('x78hsKj');
    expect(voucher.getRole()).toBe(Roles.OWNER);
    expect(voucher.getHouse()).toBe(instance(house));
    expect(voucher.getUser()).toBe(instance(user));
  });
});
