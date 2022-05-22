import React from 'react';
import TextField from '../components/common/TextField';

const UpdatePassword = () => {
  return (
    <div>
      <TextField label="New password" required />
      <TextField label="Confirm new password" required />
      <TextField label="Old password" required />
    </div>
  );
};

export default UpdatePassword;
