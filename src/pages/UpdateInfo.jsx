import React, { useMemo, useState } from 'react';
import Button from '../components/common/Button';
import TextField from '../components/common/TextField';
import { useUser } from '../components/hooks/useUser';
import { updateInfoFormValidation } from '../helper/validation';

const UpdateInfo = () => {
  const { user, updateUser } = useUser();
  const [firstName, setFirstName] = useState(
    user.firstName,
  );
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [error, setError] = useState('');

  const errors = useMemo(() => {
    return updateInfoFormValidation({
      firstName,
      lastName,
      email,
      currentEmail: user.email,
    });
  }, [firstName, lastName, email, user.email]);

  const onUpdateInfo = () => {
    if (Object.keys(errors).length) {
      return;
    }
    try {
      updateUser(user.email, {
        firstName,
        lastName,
        email,
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div>
      <TextField
        label="First name"
        value={firstName}
        onChange={setFirstName}
        error={errors.firstName}
      />
      <TextField
        label="Last name"
        value={lastName}
        onChange={setLastName}
        error={errors.lastName}
      />
      <TextField
        label="Email"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      {error && (
        <div className="text-red-800 mt-3 text-xs w-[350px]">
          {error}
        </div>
      )}
      <Button
        label="Update Info"
        className="mt-3"
        onClick={onUpdateInfo}
        disabled={Object.keys(errors).length}
      />
    </div>
  );
};

export default UpdateInfo;
