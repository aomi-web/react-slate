import React from 'react';
import { ElementService } from '../../index';
import { RenderElementProps } from 'slate-react/dist/components/editable';


/**
 * block-quote
 */
export class BlockQuoteElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'block-quote';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <li {...attributes}>{children}</li>;
  }

}
