import UserService from '../services/user/user';

/* It's a regular expression that checks if the email is valid. */
const emailRegex =
  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
/* It's a regular expression that checks if the password is valid.
 * The password must be at least 12 characters long and contain at least one lowercase letter,
 * one uppercase letter, one numeric digit, and one special character.
 */
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

/**
 * It checks if the email is valid and if it's already exist
 * @param email - The email to validate.
 * @returns error
 **/

const validateEmail = (email, currentEmail) => {
  let error = '';
  if (!email) {
    error = 'Email is required';
  }
  if (!error && !emailRegex.test(email)) {
    error = 'Invalid email';
  }
  if (
    !error &&
    UserService.getUser(email) &&
    email !== currentEmail
  ) {
    error = 'Email is already exist';
  }
  return error;
};

/**
 * If the password is not empty and it matches the passwordRegex, then return an empty string.
 * Otherwise, return an error message
 * @param password - The password to validate.
 * @returns the error message if the password does not meet the requirements.
 */
const validatePassword = (password) => {
  let error = '';
  if (!password) {
    error = 'Password is required';
  }
  if (!error && !passwordRegex.test(password)) {
    error =
      'The password must be at least 12 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.';
  }

  return error;
};

const validateFirstName = (firstName) => {
  let error = '';
  if (firstName && firstName.length > 20) {
    error = 'First name must be less than 20 chars';
  }
  return error;
};

const validateLastName = (lastName) => {
  let error = '';
  if (lastName && lastName.length > 20) {
    error = 'Last name must be less than 20 chars';
  }
  return error;
};

/**
 * It validates the form fields and returns an object with errors
 * @returns An object with the keys of firstName, lastName, email, password, and confirmPassword.
 */
export const registerFormValidation = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  let errors = {};
  const firstNameError = validateFirstName(firstName);
  if (firstNameError) {
    errors.firstName = firstNameError;
  }
  const lastNameError = validateLastName(lastName);
  if (lastNameError) {
    errors.lastName = lastNameError;
  }
  const emailError = validateEmail(email);
  if (emailError) {
    errors.email = emailError;
  }
  const passwordError = validatePassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords are not matched';
  }
  return errors;
};

export const updateInfoFormValidation = ({
  firstName,
  lastName,
  email,
  currentEmail,
}) => {
  let errors = {};
  const firstNameError = validateFirstName(firstName);
  if (firstNameError) {
    errors.firstName = firstNameError;
  }
  const lastNameError = validateLastName(lastName);
  if (lastNameError) {
    errors.lastName = lastNameError;
  }
  const emailError = validateEmail(email, currentEmail);
  if (emailError) {
    errors.email = emailError;
  }
  return errors;
};

export const updatePasswordFormValidation = ({
  password,
  confirmPassword,
}) => {
  let errors = {};
  const passwordError = validatePassword(password);
  if (passwordError) {
    errors.password = passwordError;
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords are not matched';
  }
  return errors;
};
