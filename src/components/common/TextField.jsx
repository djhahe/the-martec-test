import React from 'react';

const TextField = (props) => {
  const {
    label,
    type,
    value,
    onChange,
    className,
    ...restProps
  } = props;
  return (
    <div className={className}>
      {label && (
        <div className="text-xs font-medium mb-1">
          {label}
        </div>
      )}
      <div className="py-2 px-3 border rounded-lg">
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-[350px] outline-0 text-sm"
          {...restProps}
        />
      </div>
    </div>
  );
};

export default TextField;
