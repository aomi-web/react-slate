import React from 'react';
import { Button, ButtonProps } from 'antd';

export function ToolButton({ children, ...props }: ButtonProps) {
  return (
    <Button type="text" {...props}>
      {children}
    </Button>
  );
}
