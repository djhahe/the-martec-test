import React from 'react';
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
        <a className="mr-4" href="#">
          Update Info
        </a>
        <a href="#">Update password</a>
      </div>
    </>
  );
};

export default UserDetail;
