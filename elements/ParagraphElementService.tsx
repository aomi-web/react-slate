import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * 段落渲染服务
 */
export class ParagraphElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'paragraph';
  }

  render({ attributes, children }: RenderElementProps): JSX.Element {
    return <p {...attributes}>{children}</p>;
  }

}
