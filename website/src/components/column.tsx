import { CSSProperties, FC, PropsWithChildren } from 'react';

export const Column: FC<PropsWithChildren & { style?: CSSProperties }> = ({
  style = {},
  children,
}) => {
  return (
    <div className="column" style={{ ...style }}>
      {children}
    </div>
  );
};
