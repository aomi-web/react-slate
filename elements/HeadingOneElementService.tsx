import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * heading-one
 */
export class HeadingOneElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'heading-one';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <h1 {...attributes}>{children}</h1>;
  }

}
