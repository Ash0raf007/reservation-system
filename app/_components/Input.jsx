import React from "react";

const Input = ({
  type ,
  value,
  onChange,
  placeholder ,
  name,
  required = true,
  className,
  ...rest

}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${className}  cursor-pointer `}
      {...rest}
    />
  );
};

export default Input;
