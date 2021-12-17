import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';
import { Text } from 'react-native';


/**
 * heading-one
 */
export class HeadingTwoElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'heading-two';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <Text {...attributes}>{children}</Text>;
  }

}
