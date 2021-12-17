import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * numbered-list
 */
export class NumberedListElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'numbered-list';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <ol {...attributes}>{children}</ol>;
  }

}
