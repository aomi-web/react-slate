import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { ElementService } from './ElementService';
import { Text } from 'react-native';


/**
 * 段落渲染服务
 */
export class ParagraphElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'paragraph';
  }

  render({ attributes, children }: RenderElementProps): JSX.Element {
    return <Text {...attributes}>{children}</Text>;
  }

}
