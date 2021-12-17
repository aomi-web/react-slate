import React, { ReactNode } from 'react';
import { BuiltInToolType } from './builtInTools';

export type Tool = BuiltInToolType | ((editor, index: number) => ReactNode)

/**
 * 渲染工具
 * @param builtInTools 内置工具的实现对象
 * @param tool 工具信息
 * @param index 当前工具所在下标
 * @param editor 编辑器
 */
export function renderTool(builtInTools: Record<BuiltInToolType, any>, tool: Tool, index: number, editor: any) {
  if (typeof tool === 'string') {
    const ToolComponent: any = builtInTools[tool];
    return ToolComponent && <ToolComponent toolType={tool} key={index} editor={editor}/>;
  }
  return tool(editor, index);
}
