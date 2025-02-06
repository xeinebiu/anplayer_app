import React, { ChangeEvent } from 'react';

interface InputProps {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}

export const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
}) => (
  <input
    className="input-field"
    type="text"
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);
