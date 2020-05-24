import {House} from './House.entity';

describe('House.entity', () => {
  it('testGetters', () => {
    const house = new House('H&M');

    expect(house.getId()).toBe(undefined);
    expect(house.getName()).toBe('H&M');
  });
});
