// CommonButton.js
import React from 'react';
import Button from '@mui/material/Button';

const CommonButton = ({ variant = "contained", color = "primary", size = "medium", onClick, children, ...props }) => {
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default CommonButton;
