import CryptoJs from 'crypto-js';
import {
  getLocalStorageValue,
  setLocalStorageValue,
} from '../localStorage/localStorage';
import {
  LOCAL_STORAGE_KEY,
  USER_STORAGE_KEY,
} from '../../constant';

export const getUsers = () => {
  return getLocalStorageValue(
    LOCAL_STORAGE_KEY,
    `${USER_STORAGE_KEY}`,
  );
};

/**
 * It returns the user object from local storage, given the user's email
 * @param email - The email of the user you want to retrieve.
 * @returns The value of the key `.` in the local storage.
 */
export const getUser = (email) => {
  const users = getUsers();
  return (
    users.length &&
    users.find((user) => user.email === email)
  );
};

/**
 * It updates the user's information in local storage
 * @param userInfo - The user object that you want to update.
 */
const updateUser = (email, userInfo) => {
  if (!email) {
    throw Error('Email is required');
  }
  if (userInfo.password) {
    userInfo.password = CryptoJs.MD5(
      userInfo.password,
    ).toString();
  }
  const users = getUsers();
  const userIndex = users.findIndex(
    (u) => u.email === email,
  );

  if (userIndex < 0) {
    throw Error('User does not exist');
  }
  const user = users[userIndex];
  setLocalStorageValue(
    LOCAL_STORAGE_KEY,
    `${USER_STORAGE_KEY}[${userIndex}]`,
    { ...user, ...userInfo },
    'set',
  );
  return userInfo;
};

/**
 * It takes a user object, encrypts the password, and then saves the user object to local storage
 * @param userInfo - The user information object.
 * @returns The userInfo object is being returned.
 */
const createUser = (userInfo) => {
  const encryptedPass = CryptoJs.MD5(
    userInfo.password,
  ).toString();
  const updateUserInfo = {
    ...userInfo,
    password: encryptedPass,
  };
  setLocalStorageValue(
    LOCAL_STORAGE_KEY,
    USER_STORAGE_KEY,
    updateUserInfo,
    'push',
  );
  return updateUserInfo;
};

/**
 * "If the user doesn't exist or the password doesn't match, throw an error. Otherwise, return the
 * user."
 * @param email - The email address of the user.
 * @param password - The password that the user entered.
 * @returns The user object.
 */
const login = (email, password) => {
  const user = getUser(email);
  const encryptedPass = CryptoJs.MD5(password).toString();
  if (!user || user.password !== encryptedPass) {
    throw Error('Your email or password is incorrect.');
  }
  return user;
};

/**
 * Update the password of a user with a given email address.
 * @param email - The email of the user to update.
 * @param password - The current password of the user.
 * @param updatePassword - The password will be updated.
 */
const updatePassword = (
  email,
  password,
  updatePassword,
) => {
  login(email, password);
  updateUser(email, { password: updatePassword });
};

export default {
  login,
  createUser,
  updateUser,
  getUser,
  getUsers,
  updatePassword,
};
