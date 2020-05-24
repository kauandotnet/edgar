import {mock, instance} from 'ts-mockito';
import {User} from './User.entity';
import {UserHouse, Roles} from './UserHouse.entity';
import {House} from '../House/House.entity';

describe('UserHouse.entity', () => {
  it('testGetters', () => {
    const user = mock(User);
    const house = mock(House);
    const userHouse = new UserHouse(
      Roles.OWNER,
      instance(house),
      instance(user)
    );

    expect(userHouse.getId()).toBe(undefined);
    expect(userHouse.getRole()).toBe(Roles.OWNER);
    expect(userHouse.getUser()).toBe(instance(user));
    expect(userHouse.getHouse()).toBe(instance(house));
  });
});
