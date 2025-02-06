import React from 'react';

interface ButtonProps {
  href: string;
  text: string;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ href, text, style }) => {
  return (
    <a
      href={href}
      target="_blank"
      style={{
        display: 'block',
        padding: '10px 20px',
        backgroundColor: '#007BFF',
        color: '#fff',
        borderRadius: '5px',
        textDecoration: 'none',
        textAlign: 'center',
        cursor: 'pointer',
        width: 'fit-content',
        ...style,
      }}
    >
      <p style={{ margin: 0 }}>{text}</p>
    </a>
  );
};

export default Button;
