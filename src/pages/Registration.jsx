import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '../components/common/TextField';
import Button from '../components/common/Button';
import { registerFormValidation } from '../helper/validation';
import { useUser } from '../components/hooks/useUser';

const Registration = () => {
  // Hooks
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const { createUser } = useUser();
  const navigate = useNavigate();

  const errors = useMemo(() => {
    return registerFormValidation({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  }, [
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
  ]);

  const onRegister = () => {
    if (Object.keys(errors).length) {
      return;
    }
    createUser({ firstName, lastName, email, password });
    navigate('/');
  };

  return (
    <div className="flex flex-col h-screen items-center justify-center m-auto">
      <div className="text-2xl font-semibold ">
        Welcome to The Martec
      </div>
      <div className="text-grey-700 text-sm mt-4">
        Input your information
      </div>
      <TextField
        label="First Name"
        className="mt-10"
        placeholder="First Name"
        value={firstName}
        onChange={setFirstName}
        error={errors.firstName}
      />
      <TextField
        label="Last Name"
        className="mt-10"
        placeholder="Last Name"
        value={lastName}
        onChange={setLastName}
        error={errors.lastName}
      />
      <TextField
        label="Email"
        className="mt-10"
        placeholder="Email"
        value={email}
        onChange={setEmail}
        error={errors.email}
        required
      />
      <TextField
        label="Password"
        type="password"
        className="mt-10"
        placeholder="Password"
        value={password}
        onChange={setPassword}
        error={errors.password}
        required
      />
      <TextField
        label="Confirm"
        type="password"
        className="mt-10"
        placeholder="Confirm password"
        value={confirmPassword}
        onChange={setConfirmPassword}
        error={errors.confirmPassword}
        required
      />
      <div className="text-sm text-grey-700 mt-2">
        Already have account ?{' '}
        <a href="/login" className="text-primary">
          Login
        </a>
      </div>
      <Button
        label="Register"
        className="mt-10 w-[360px]"
        onClick={onRegister}
        disabled={Object.keys(errors).length}
      />
    </div>
  );
};

export default Registration;
