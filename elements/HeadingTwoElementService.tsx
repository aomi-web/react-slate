import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * heading-one
 */
export class HeadingTwoElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'heading-two';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <h2 {...attributes}>{children}</h2>;
  }

}
