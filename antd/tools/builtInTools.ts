import { ReactNode } from 'react';
import { MarkButton } from './MarkButton';
import { Divider } from './Divider';
import { BuiltInToolType } from '../../toolBar/builtInTools';
import { BlockButton } from './BlockButton';

export const builtInTools: Record<BuiltInToolType, ReactNode> = {
  'font-family': undefined,
  'font-size': undefined,
  'letter-spacing': undefined,
  'line-height': undefined,
  'numbered-list': BlockButton,
  'bulleted-list': BlockButton,
  'remove-styles': undefined,
  'strike-through': undefined,
  'text-align': undefined,
  'text-color': undefined,
  'text-indent': undefined,

  bold: MarkButton,
  underline: MarkButton,
  code: MarkButton,
  italic: MarkButton,

  blockquote: BlockButton,

  clear: undefined,
  emoji: undefined,
  fullscreen: undefined,
  headings: undefined,
  hr: undefined,
  link: undefined,
  media: undefined,
  redo: undefined,
  divider: Divider,
  subscript: undefined,
  superscript: undefined,
  table: undefined,
  undo: undefined
};
