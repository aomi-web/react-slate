import { ReactNode } from 'react';
import { MarkButton } from './MarkButton';
import { Divider } from './Divider';

export type BuiltInToolType =
  | 'blockquote'
  | 'bold'
  | 'code'
  | 'clear'
  | 'emoji'
  | 'font-family'
  | 'font-size'
  | 'fullscreen'
  | 'headings'
  | 'hr'
  | 'italic'
  | 'letter-spacing'
  | 'line-height'
  | 'link'
  | 'list-ol'
  | 'list-ul'
  | 'media'
  | 'redo'
  | 'remove-styles'
  | 'divider'
  | 'strike-through'
  | 'superscript'
  | 'subscript'
  | 'text-align'
  | 'text-color'
  | 'text-indent'
  | 'underline'
  | 'undo'
  | 'table'


export const builtInTools: Record<BuiltInToolType, ReactNode> = {
  'font-family': undefined,
  'font-size': undefined,
  'letter-spacing': undefined,
  'line-height': undefined,
  'list-ol': undefined,
  'list-ul': undefined,
  'remove-styles': undefined,
  'strike-through': undefined,
  'text-align': undefined,
  'text-color': undefined,
  'text-indent': undefined,

  bold: MarkButton,
  underline: MarkButton,
  code: MarkButton,
  italic: MarkButton,

  blockquote: undefined,

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
