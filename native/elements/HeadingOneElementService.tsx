import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';
import { Text } from 'react-native';


/**
 * heading-one
 */
export class HeadingOneElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'heading-one';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <Text {...attributes}>{children}</Text>;
  }

}
