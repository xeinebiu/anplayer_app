import React from 'react';

interface CheckboxProps {
  id: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  id,
  checked,
  onChange,
}) => (
  <input
    type="checkbox"
    id={id}
    className="checkbox"
    checked={checked}
    onChange={(e) => onChange(e.target.checked)}
  />
);
