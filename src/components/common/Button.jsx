import React from 'react';
import { getClasses } from '../../helper/classes';

const Button = ({
  label,
  onClick,
  className,
  disabled,
  secondary,
}) => {
  const classes = getClasses({
    'opacity-50': disabled,
    'bg-grey-900': secondary,
    'bg-primary': !secondary,
  });

  const onBtnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`btn flex items-center px-4 py-2.5 font-bold rounded-lg justify-center text-white ${className} ${classes}`}
      onClick={onBtnClick}
      disabled={disabled}
    >
      <span className="text-sm text-white">{label}</span>
    </button>
  );
};

export default Button;
