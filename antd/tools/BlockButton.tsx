import { ToolButton } from './ToolButton';
import React from 'react';
import { toggleBlock } from '../../utils';

const icons = {
  blockquote: <i className="iconfont icon-yinyong"/>,
  'numbered-list': <i className="iconfont icon-youxupailie"/>,
  'bulleted-list': <i className="iconfont icon-wuxupailie"/>
};

export function BlockButton({ toolType, editor }) {
  return <ToolButton icon={icons[toolType]} onClick={() => toggleBlock(editor, toolType)}/>;
}
