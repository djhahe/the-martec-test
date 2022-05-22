import { setLocalStorageValue } from '../localStorage/localStorage';
import UserServices from './user';
const MOCK_STORAGE_DATA = {
  themartectest: {
    users: [
      {
        fistName: 'test',
        lastName: 'test',
        email: 'test@gmail.com',
        password: '80dd170a7a8557f7afd756da19d9a062',
      },
    ],
  },
};
jest.mock('../localStorage/localStorage', () => {
  return {
    getLocalStorageValue: (storageKey, valueKey) => {
      return MOCK_STORAGE_DATA[storageKey][valueKey];
    },
    setLocalStorageValue: jest.fn(),
  };
});

test('it should return list user', () => {
  expect(UserServices.getUsers()).toEqual([
    {
      fistName: 'test',
      lastName: 'test',
      email: 'test@gmail.com',
      password: '80dd170a7a8557f7afd756da19d9a062',
    },
  ]);
});

test('it should return a user', () => {
  expect(UserServices.getUser('test@gmail.com')).toEqual({
    fistName: 'test',
    lastName: 'test',
    email: 'test@gmail.com',
    password: '80dd170a7a8557f7afd756da19d9a062',
  });
});

describe('updateUser', () => {
  test('it should throw email require error', () => {
    try {
      UserServices.updateUser('');
    } catch (error) {
      expect(error.message).toEqual('Email is required');
    }
  });
  test('it should throw user not exist error', () => {
    try {
      UserServices.updateUser('test1@gmail.com', {});
    } catch (error) {
      expect(error.message).toEqual('User does not exist');
    }
  });
  test('it should update user', () => {
    const user = UserServices.updateUser('test@gmail.com', {
      password: 'test123$1111',
      email: 'test@gmail.com',
    });
    expect(setLocalStorageValue).toHaveBeenCalled();
    expect(user).toEqual({
      email: 'test@gmail.com',
      password: 'a4edeadbc1461328c4959dec2cbce74a',
    });
  });
});

test('it should create user', () => {
  const user = UserServices.createUser({
    firstName: 'test',
    lastName: 'test',
    email: 'test@gmail.com',
    password: 'test@123$1111',
  });
  expect(setLocalStorageValue).toHaveBeenCalled();
  expect(user).toEqual({
    email: 'test@gmail.com',
    firstName: 'test',
    lastName: 'test',
    password: '80dd170a7a8557f7afd756da19d9a062',
  });
});

describe('login', () => {
  test('it should throw error if wrong login info', () => {
    try {
      UserServices.login('test@gmail.com', 'test');
    } catch (error) {
      expect(error.message).toEqual(
        'Your email or password is incorrect.',
      );
    }
  });
  test('it should return user if login successfully', () => {
    const user = UserServices.login(
      'test@gmail.com',
      'test@123$1111',
    );
    expect(user).toEqual({
      email: 'test@gmail.com',
      fistName: 'test',
      lastName: 'test',
      password: '80dd170a7a8557f7afd756da19d9a062',
    });
  });
});

test('it should update password successfully', () => {
  UserServices.updatePassword(
    'test@gmail.com',
    'test@123$1111',
    'test@1231111',
  );
  expect(setLocalStorageValue).toHaveBeenCalled();
});
