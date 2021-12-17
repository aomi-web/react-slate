import React, { PropsWithChildren } from 'react';
import { SlateEditor, SlateEditorProps } from '../index';
import { MediaElementService } from './elements/MediaElementService';
import { AntdParagraphElementService } from './elements/ParagraphElementService';
import { ToolBar, ToolBarProps } from './ToolBar';
import { BlockQuoteElementService } from '../elements/BlockQuoteElementService';
import { BulletedListElementService } from '../elements/BulletedListElementService';
import { HeadingOneElementService } from '../elements/HeadingOneElementService';
import { HeadingTwoElementService } from '../elements/HeadingTwoElementService';
import { ListItemElementService } from '../elements/ListItemElementService';
import { NumberedListElementService } from '../elements/NumberedListElementService';


export type AntdSlateEditorProps = {
  defaultRenderElement?: SlateEditorProps['defaultRenderElement']
  elementServices?: SlateEditorProps['elementServices']

  toolBarProps?: Omit<ToolBarProps, 'editor'>
} & Omit<SlateEditorProps, 'defaultRenderElement' | 'elementServices'>

export const defaultElementServices = [
  new BlockQuoteElementService(),
  new BulletedListElementService(),
  new HeadingOneElementService(),
  new HeadingTwoElementService(),
  new ListItemElementService(),
  new NumberedListElementService(),

  new MediaElementService(),
  new AntdParagraphElementService()
];


/**
 * antd UI 实现的slate编辑组件
 * @constructor
 */
export function AntdSlateEditor({ elementServices, toolBarProps, ...props }: PropsWithChildren<AntdSlateEditorProps>) {
  return (
    <SlateEditor elementServices={elementServices || defaultElementServices}
                 renderHeader={(editor) => <ToolBar {...toolBarProps} editor={editor}/>}
                 {...props}/>
  );
}
