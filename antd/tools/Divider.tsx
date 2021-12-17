import React from 'react';
import { Divider as ANTDDivider } from 'antd';
import { ToolButton } from './ToolButton';

export function Divider() {
  return (
    <ToolButton disabled>
      <ANTDDivider type="vertical"/>
    </ToolButton>
  );
}
