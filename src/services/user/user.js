import CryptoJs from 'crypto-js';
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from '../localStorage/localStorage';
import {
  LOCAL_STORAGE_KEY,
  USER_STORAGE_KEY,
} from '../../constant';

/**
 * It returns the user object from local storage, given the user's email
 * @param email - The email of the user you want to retrieve.
 * @returns The value of the key `.` in the local storage.
 */
export const getUser = (email) => {
  const users = getLocalStorageValue(
    LOCAL_STORAGE_KEY,
    `${USER_STORAGE_KEY}`,
  );
  return (
    users.length &&
    users.find((user) => user.email === email)
  );
};

/**
 * It updates the user's information in local storage
 * @param userInfo - The user object that you want to update.
 */
export const updateUser = (email, userInfo) => {
  if (email) {
    throw Error('Email is required');
  }
  if (userInfo.password) {
    userInfo.password = CryptoJs.MD5(
      userInfo.password,
    ).toString();
  }
  setLocalStorageValue(
    LOCAL_STORAGE_KEY,
    `${USER_STORAGE_KEY}.${userInfo.email}`,
    userInfo,
    'set',
  );
};

export const creatUser = (userInfo) => {
  const encryptedPass = CryptoJs.MD5(
    userInfo.password,
  ).toString();
  setLocalStorageValue(
    LOCAL_STORAGE_KEY,
    USER_STORAGE_KEY,
    { ...userInfo, password: encryptedPass },
    'push',
  );
};

export const login = (email, password) => {
  const user = getUser(email);
  const encryptedPass = CryptoJs.MD5(password).toString();
  if (!user || user.password !== encryptedPass) {
    throw Error('Your email or password is incorrect.');
  }
  return user;
};
