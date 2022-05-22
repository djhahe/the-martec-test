import {
  validateEmail,
  validatePassword,
  validateFirstName,
  validateLastName,
  registerFormValidation,
  updateInfoFormValidation,
  updatePasswordFormValidation,
} from './validation';

jest.mock('../services/user/user', () => {
  return {
    __esModule: true,
    default: {
      getUser: (email) => {
        return ['test@gmail.com'].includes(email);
      },
    },
  };
});

describe('validateEmail', () => {
  test('it should return required message', () => {
    const error = validateEmail('');
    expect(error).toEqual('Email is required');
  });
  test('it should return invalid email message', () => {
    const error = validateEmail('test');
    expect(error).toEqual('Invalid email');
  });
  test('it should return existing email message', () => {
    const error = validateEmail('test@gmail.com');
    expect(error).toEqual('Email is already exist');
  });
  test('it should return empty message for valid email', () => {
    const error = validateEmail('test1@gmail.com');
    expect(error).toEqual('');
  });
});

describe('validatePassword', () => {
  test('it should return required message', () => {
    const error = validatePassword('');
    expect(error).toEqual('Password is required');
  });
  test('it should return invalid password', () => {
    const error = validatePassword('test');
    expect(error).toEqual(
      'The password must be at least 12 characters long and contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.',
    );
  });
  test('it should return empty message for valid password', () => {
    const error = validatePassword('testW@1234234243');
    expect(error).toEqual('');
  });
});

describe('validateFirstName', () => {
  test('it should return max length message', () => {
    const error = validateFirstName(
      'TEST111111111111111111111',
    );
    expect(error).toEqual(
      'First name must be less than 20 chars',
    );
  });
  test('it should return empty message for valid first name', () => {
    const error = validateFirstName('TEST111111111');
    expect(error).toEqual('');
  });
});

describe('validateLastName', () => {
  test('it should return max length message', () => {
    const error = validateLastName(
      'TEST111111111111111111111',
    );
    expect(error).toEqual(
      'Last name must be less than 20 chars',
    );
  });
  test('it should return empty message for valid first name', () => {
    const error = validateLastName('TEST111111111');
    expect(error).toEqual('');
  });
});

describe('registerFormValidation', () => {
  const invalidCases = [
    {
      firstName: 'test',
      lastName: 'test',
      email: 'test@gmail.com',
      password: 'Test123$1111',
      confirmPassword: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test',
      email: 'testgmail.com',
      password: 'Test123$1111',
      confirmPassword: 'test',
    },
    {
      firstName: 'test111111111111111111111',
      lastName: 'test',
      email: 'test@gmail.com',
      password: 'Test123$',
      confirmPassword: 'test',
    },
    {
      firstName: 'test',
      lastName: 'test11111111111111111111',
      email: 'test@gmail.com',
      password: 'Test123$',
      confirmPassword: 'test',
    },
  ];
  test.each(invalidCases)(
    'it should return errors',
    (value) => {
      expect(
        Object.keys(registerFormValidation(value)).length,
      ).toBeGreaterThan(0);
    },
  );
  test('it should return empty error', () => {
    expect(
      Object.keys(
        registerFormValidation({
          firstName: 'test',
          lastName: 'test',
          email: 'test1@gmail.com',
          password: 'Test123$1111',
          confirmPassword: 'Test123$1111',
        }),
      ).length,
    ).toBe(0);
  });
});

describe('updateInfoFormValidation', () => {
  const invalidCases = [
    {
      firstName: 'test111111111111111111111',
      lastName: 'test111111111111111111111',
      email: 'test@gmail.c',
      currentEmail: 'test@gmail.com',
    },
    {
      firstName: 'test1111111111111',
      lastName: 'test',
      email: 'test@gmail.c',
      currentEmail: 'test@gmail.com',
    },
  ];
  test.each(invalidCases)(
    'it should return errors',
    (value) => {
      expect(
        Object.keys(updateInfoFormValidation(value)).length,
      ).toBeGreaterThan(0);
    },
  );
  test('it should return empty error', () => {
    expect(
      Object.keys(
        updateInfoFormValidation({
          firstName: 'test',
          lastName: 'test',
          email: 'test@gmail.com',
          currentEmail: 'test@gmail.com',
        }),
      ).length,
    ).toBe(0);
  });
});

describe('updatePasswordFormValidation', () => {
  const invalidCases = [
    {
      password: 'Test123$',
      confirmPassword: 'Test123$',
    },
    {
      password: 'Test123$1111',
      confirmPassword: 'Test123$',
    },
  ];
  test.each(invalidCases)(
    'it should return errors',
    (value) => {
      expect(
        Object.keys(updatePasswordFormValidation(value))
          .length,
      ).toBeGreaterThan(0);
    },
  );
  test('it should return empty error', () => {
    expect(
      Object.keys(
        updatePasswordFormValidation({
          password: 'Test123$1111',
          confirmPassword: 'Test123$1111',
        }),
      ).length,
    ).toBe(0);
  });
});
