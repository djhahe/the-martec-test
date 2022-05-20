/**
 * It returns true if the email address is valid, and false if it's not
 * @param mail - The email address to validate.
 * @returns A boolean value.
 */
const validateEmail = (mail) => {
  if (
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(mail)
  ) {
    return true;
  }
  return false;
};

/**
 * "The password must be at least 12 characters long and contain at least one lowercase letter, one
 * uppercase letter, one numeric digit, and one special character."
 *
 * The password must contain at least one of each of the following:
 *
 * lowercase letter
 * uppercase letter
 * numeric digit
 * special character
 * The password must not contain any spaces
 * @param password - the password to validate
 * @returns A boolean value.
 */
const validatePassword = (password) => {
  if (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/.test(
      password,
    )
  ) {
    return true;
  }
  return false;
};

export const registerFormValidation = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
}) => {
  let errors = {};
  if (firstName && firstName.length > 20) {
    errors.firstName =
      'First name must be less than 20 chars';
  }
  if (lastName && lastName.length > 20) {
    errors.lastName =
      'First name must be less than 20 chars';
  }
  if (!email) {
    errors.email = 'Email is required';
  }
  if (!errors.email && !validateEmail(email)) {
    errors.email = 'Invalid email';
  }
  if (!password) {
    errors.password = 'Password is required';
  }
  if (!errors.password && !validatePassword(password)) {
    errors.password =
      'The password must be at least 12 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.';
  }
  if (password !== confirmPassword) {
    errors.confirmPassword = 'Passwords are not matched';
  }
  return errors;
};
