import { CSSProperties, FC, PropsWithChildren } from 'react';

export const Row: FC<PropsWithChildren & { style?: CSSProperties }> = ({
  style = {},
  children,
}) => {
  return (
    <div className="row" style={{ ...style }}>
      {children}
    </div>
  );
};
