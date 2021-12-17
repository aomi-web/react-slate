import React, { PropsWithChildren } from 'react';
import { Row, RowProps } from 'antd';
import { renderTool, Tool } from '../toolBar/Tool';
import { builtInTools } from './tools/builtInTools';


export type ToolBarProps = {
  tools?: Array<Tool>

  editor: any
} & RowProps;


export const defaultTools: Array<Tool> = [
  'blockquote',
  'bold',
  'code',
  'clear',
  'emoji',
  'font-family',
  'font-size',
  'fullscreen',
  'headings',
  'hr',
  'italic',
  'letter-spacing',
  'line-height',
  'link',
  'numbered-list',
  'bulleted-list',
  'media',
  'redo',
  'remove-styles',
  'divider',
  'strike-through',
  'superscript',
  'subscript',
  'text-align',
  'text-color',
  'text-indent',
  'underline',
  'undo',
  'table'
];


/**
 * 工具栏
 * @constructor
 */
export function ToolBar({ tools = defaultTools, editor, children, ...props }: PropsWithChildren<ToolBarProps>) {
  return (
    <Row gutter={[4, 4]} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.2)' }} {...props}>
      {tools?.map((tool, index) => renderTool(builtInTools, tool, index, editor))}
      {children}
    </Row>
  );
}
