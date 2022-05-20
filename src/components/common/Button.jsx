import React from 'react';
import './Button.css';

const Button = ({ label, onClick, className }) => {
  const onBtnClick = (e) => {
    e.preventDefault();
    onClick();
  };

  return (
    <button
      className={`btn flex items-center bg-primary px-4 py-2.5 font-bold rounded-lg justify-center text-white ${className}`}
      onClick={onBtnClick}
    >
      <span className="text-sm text-white">{label}</span>
    </button>
  );
};

export default Button;
