import React from 'react';
import { getClasses } from '../../helper/classes';
import './Button.css';

const Button = ({
  label,
  onClick,
  className,
  disabled,
}) => {
  const classes = getClasses({ 'opacity-50': disabled });

  const onBtnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`btn flex items-center bg-primary px-4 py-2.5 font-bold rounded-lg justify-center text-white ${className} ${classes}`}
      onClick={onBtnClick}
      disabled={disabled}
    >
      <span className="text-sm text-white">{label}</span>
    </button>
  );
};

export default Button;
