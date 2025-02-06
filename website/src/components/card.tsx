import React from 'react';

interface CardProps extends React.PropsWithChildren {
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => (
  <div className={`card ${className || ''}`}>{children}</div>
);

export const CardHeader: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="card-header">{children}</div>
);

export const CardTitle: React.FC<React.PropsWithChildren> = ({ children }) => (
  <h3 className="card-title">{children}</h3>
);

export const CardContent: React.FC<React.PropsWithChildren> = ({
  children,
}) => <div className="card-content">{children}</div>;
