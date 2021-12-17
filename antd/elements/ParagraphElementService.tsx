import React from 'react';
import { ElementService } from '../index';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { Typography } from 'antd';


/**
 * 段落渲染服务
 */
export class ParagraphElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'paragraph';
  }

  render({ attributes, children }: RenderElementProps): JSX.Element {
    return (
      <span {...attributes}>
        <Typography.Paragraph>
          {children}
        </Typography.Paragraph>
      </span>
    );
  }

}
