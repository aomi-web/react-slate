import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * list-item
 */
export class ListItemElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'list-item';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <li {...attributes}>{children}</li>;
  }

}
