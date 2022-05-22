import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Button
      label="Back"
      onClick={() => navigate(-1)}
      secondary
    />
  );
};

export default BackButton;
