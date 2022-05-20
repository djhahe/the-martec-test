import React from 'react';
import TextField from '../components/common/TextField';
import Button from '../components/common/Button';

const Registration = () => {
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
        placeHolder="First Name"
      />
      <TextField
        label="Last Name"
        className="mt-10"
        placeHolder="Last Name"
      />
      <TextField
        label="Email"
        className="mt-10"
        placeHolder="Email"
      />
      <TextField
        label="Password"
        type="password"
        className="mt-10"
        placeHolder="Password"
      />
      <TextField
        label="Confirm"
        type="password"
        className="mt-10"
        placeHolder="Confirm password"
      />
      <Button
        label="Register"
        className="mt-10 w-[360px]"
      />
    </div>
  );
};

export default Registration;
