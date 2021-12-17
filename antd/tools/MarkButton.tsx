import React from 'react';
import { ToolButton } from './ToolButton';
import { toggleMark } from '../../utils';


const icons = {
  bold: <i className="iconfont icon-zitijiacu"/>,
  underline: <i className="iconfont icon-zitixiahuaxian"/>,
  code: <i className="iconfont icon-zitidaima"/>
};

export function MarkButton({ toolType, editor }) {
  return <ToolButton icon={icons[toolType]} onClick={() => toggleMark(editor, toolType)}/>;
}
