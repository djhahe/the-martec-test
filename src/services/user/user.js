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
  return getLocalStorageValue(
    LOCAL_STORAGE_KEY,
    `${USER_STORAGE_KEY}.${email}`,
  );
};

/**
 * It updates the user's information in local storage
 * @param userInfo - The user object that you want to update.
 */
export const updateUser = (userInfo) => {
  if (!userInfo.email) {
    throw Error('Email is required');
  }
  setLocalStorageValue(
    LOCAL_STORAGE_KEY,
    `${USER_STORAGE_KEY}.${userInfo.email}`,
    userInfo,
    'set',
  );
};
