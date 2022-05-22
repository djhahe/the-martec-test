import React from 'react';
import { getClasses } from '../../helper/classes';

const TextField = (props) => {
  const {
    label,
    type,
    value,
    onChange,
    className,
    error,
    required,
    width = 350,
    ...restProps
  } = props;
  const classes = getClasses({
    [`w-[${width + 10}px]`]: true,
  });
  return (
    <div className={className}>
      {label && (
        <div className="text-xs font-medium mb-1">
          {label}{' '}
          {required && (
            <span className="text-red-800 text-xs">*</span>
          )}
        </div>
      )}
      <div
        className={`py-2 px-2 border rounded-lg ${classes}`}
      >
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-[${width}px] outline-0 text-sm`}
          {...restProps}
        />
      </div>
      {error && (
        <div className="text-red-800 mt-1 text-xs w-[350px]">
          {error}
        </div>
      )}
    </div>
  );
};

export default TextField;
