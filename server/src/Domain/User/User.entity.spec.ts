import {User} from './User.entity';

describe('User.entity', () => {
  it('testGetters', () => {
    const user = new User(
      'Mathieu',
      'MARCHOIS',
      'mathieu.marchois@fairness.coop',
      'apiToken',
      'password'
    );

    expect(user.getId()).toBe(undefined);
    expect(user.getFirstName()).toBe('Mathieu');
    expect(user.getLastName()).toBe('MARCHOIS');
    expect(user.getEmail()).toBe('mathieu.marchois@fairness.coop');
    expect(user.getLastName()).toBe('mathieu.marchois@fairness.coop');
    expect(user.getApiToken()).toBe('apiToken');
    expect(user.getPassword()).toBe('password');
  });
});
