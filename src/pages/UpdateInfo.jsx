import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import TextField from '../components/common/TextField';
import { useUser } from '../components/hooks/useUser';
import { updateInfoFormValidation } from '../helper/validation';

const UpdateInfo = () => {
  const navigate = useNavigate();
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
      navigate('/userDetails');
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
        className="mt-5"
      />
      <TextField
        label="Last name"
        value={lastName}
        onChange={setLastName}
        error={errors.lastName}
        className="mt-5"
      />
      <TextField
        label="Email"
        value={email}
        onChange={setEmail}
        error={errors.email}
        className="mt-5"
      />
      {error && (
        <div className="text-red-800 mt-3 text-xs w-[350px]">
          {error}
        </div>
      )}
      <Button
        label="Update"
        className="mt-5"
        onClick={onUpdateInfo}
        disabled={Object.keys(errors).length}
      />
    </div>
  );
};

export default UpdateInfo;
