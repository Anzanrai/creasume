import React from 'react';

import { Button } from '@mui/material';

const CustomButton = ({ label, variant, color, buttonClass, buttonStyle }) => {
  return (
    <Button
      style={buttonStyle}
      className={buttonClass}
      variant={variant}
      color={color}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
