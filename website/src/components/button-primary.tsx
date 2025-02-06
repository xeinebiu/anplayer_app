import React, { MouseEventHandler } from 'react';

interface PrimaryButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

// Reusable Components

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  onClick,
  children,
}) => (
  <button className="button button-primary" onClick={onClick}>
    {children}
  </button>
);
