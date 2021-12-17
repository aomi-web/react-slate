import React from 'react';
import { ElementService } from '../index';
import { MediaEditor, MediaNode } from '../plugins/image/MediaEditor';
import { MediaImage } from './MediaImage';


/**
 * 媒体信息渲染服务
 */
export class MediaElementService implements ElementService {

  support({ element }): boolean {
    return element.type === 'media';
  }

  render({ attributes, children, element }, editor: MediaEditor) {
    const e = element as MediaNode;
    switch (e.mediaType) {
      case 'image':
        // fontSize 解决图片直接的间距
        return (
          <div {...attributes} style={{ fontSize: 0 }}>
            {children}
            <MediaImage editor={editor} src={element.source} contentEditable={false}/>
          </div>
        );
      case 'video':
        break;
    }
    return (
      <span {...attributes}>{`不支持渲染当前媒体类型: ${e.mediaType}; ${e.source}`}</span>
    );
  }

}

