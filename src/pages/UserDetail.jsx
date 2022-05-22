import React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../components/hooks/useUser';

const DETAILS_MAPPING = [
  {
    key: 'firstName',
    label: 'First Name',
  },
  {
    key: 'lastName',
    label: 'Last Name',
  },
  {
    key: 'email',
    label: 'Email',
  },
];

const UserDetail = () => {
  const { user } = useUser();

  return (
    <>
      {DETAILS_MAPPING.map(({ key, label }) => {
        return (
          <div
            className="flex justify-between w-[500px] mt-2"
            key={key}
          >
            <span className="text-grey-700 font-semibold">
              {label}
            </span>
            <span>{user[key]}</span>
          </div>
        );
      })}
      <div className="mt-4 text-primary">
        <Link className="mr-4" to="/updateInfo">
          Update Info
        </Link>
        <Link to="/updatePassword">Update password</Link>
      </div>
    </>
  );
};

export default UserDetail;
