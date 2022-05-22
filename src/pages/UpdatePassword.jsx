import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import TextField from '../components/common/TextField';
import { useUser } from '../components/hooks/useUser';
import { updatePasswordFormValidation } from '../helper/validation';

const UpdatePassword = () => {
  const navigate = useNavigate();
  const { user, updatePassword } = useUser();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] =
    useState('');
  const [currentPassword, setCurrentPassword] =
    useState('');
  const [error, setError] = useState();

  const errors = useMemo(() => {
    return updatePasswordFormValidation({
      password,
      confirmPassword,
    });
  }, [password, confirmPassword]);

  const onUpdatePassword = () => {
    if (Object.keys(errors).length) {
      return;
    }
    try {
      updatePassword(user.email, currentPassword, password);
      navigate('/userDetails');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <TextField
        label="New password"
        type="password"
        required
        value={password}
        onChange={setPassword}
        error={errors.password}
      />
      <TextField
        label="Confirm new password"
        type="password"
        required
        className="mt-5"
        value={confirmPassword}
        onChange={setConfirmPassword}
        error={errors.confirmPassword}
      />
      <TextField
        label="Old password"
        type="password"
        required
        className="mt-5"
        value={currentPassword}
        onChange={setCurrentPassword}
      />
      {error && (
        <div className="text-red-800 mt-3 text-xs w-[350px]">
          {error}
        </div>
      )}
      <Button
        label="Update"
        className="mt-5"
        onClick={onUpdatePassword}
      />
    </div>
  );
};

export default UpdatePassword;
