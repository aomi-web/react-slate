import React from 'react';
import { RenderElementProps } from 'slate-react/dist/components/editable';
import { Typography } from 'antd';
import { ParagraphElementService } from '../../elements/ParagraphElementService';


/**
 * 段落渲染服务
 */
export class AntdParagraphElementService extends ParagraphElementService {

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
