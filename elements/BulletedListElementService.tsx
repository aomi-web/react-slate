import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * block-quote
 */
export class BlockQuoteElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'block-quote';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <blockquote {...attributes}>{children}</blockquote>;
  }

}
