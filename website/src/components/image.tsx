import { FC } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const Image: FC<{ width?: number; src: string; alt?: string }> = ({
  width = 300,
  src,
  alt,
}) => {
  return <img src={useBaseUrl(src)} width={width} alt={alt} />;
};
