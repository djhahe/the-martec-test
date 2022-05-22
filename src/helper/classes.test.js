import { getClasses } from './classes';

describe('getClasses', () => {
  test('it should return classes', () => {
    const classes = getClasses({
      'test-class': true,
      'mt-4': true,
      'mt-5': false,
    });
    expect(classes).toEqual('test-class mt-4');
  });
});
