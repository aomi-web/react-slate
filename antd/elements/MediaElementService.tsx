import React, { useState } from 'react';
import { MediaEditor, MediaNode } from '../../plugins/image/MediaEditor';
import { Image, ImageProps } from 'antd';
import { ElementService } from '../../elements/ElementService';

export type MediaImageProps = {
  editor: MediaEditor
} & ImageProps

export function MediaImage({ editor, ...props }: MediaImageProps) {
  const [visible, setVisible] = useState(false);
  return (
    <>
      <Image {...props}/>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          {editor.images?.map((item, index) => (
            <Image src={item as string} key={index}/>
          ))}
        </Image.PreviewGroup>
      </div>
    </>
  );
}


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

