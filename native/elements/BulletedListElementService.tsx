import React from 'react';
import { Text } from 'react-native';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';


/**
 * bulleted-list
 */
export class BulletedListElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'bulleted-list';
  }

  render({ attributes, children }: RenderElementProps, editor): JSX.Element {
    return <Text {...attributes}>{children}</Text>;
  }

}
