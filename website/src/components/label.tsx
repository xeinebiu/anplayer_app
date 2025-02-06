import React from 'react';

interface LabelProps extends React.PropsWithChildren {
  htmlFor?: string;
  muted?: boolean;
}

export const Label: React.FC<LabelProps> = ({ htmlFor, children, muted }) => (
  <label className={muted ? 'label-muted' : 'label'} htmlFor={htmlFor}>
    {children}
  </label>
);
