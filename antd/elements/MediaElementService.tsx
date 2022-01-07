import React, { useState } from 'react';
import { MediaEditor, MediaNode } from '../../plugins/image/MediaEditor';
import { Button, Image, ImageProps } from 'antd';
import { ElementService } from '../../elements/ElementService';
import { ReactEditor, useFocused, useSelected } from 'slate-react';
import { Path, Transforms } from 'slate';

export type MediaImageProps = {
  editor: MediaEditor
  path: Path
  selected: boolean
  focused: boolean
} & ImageProps

export function MediaImage({ path, selected, focused, editor, ...props }: MediaImageProps) {
  const [visible, setVisible] = useState(false);
  return (
    <div style={{ position: 'relative' }} contentEditable={false}>
      <Image preview={false} style={{
        boxShadow: selected && focused ? '0 0 0 3px #B4D5FF' : undefined
      }} {...props}/>
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          {editor.images?.map((item, index) => (
            <Image src={item as string} key={index}/>
          ))}
        </Image.PreviewGroup>
      </div>
      <Button style={{ position: 'absolute', display: selected && focused ? 'inline' : 'none', top: '0.5em', left: '0.5em' }}
              icon={<i className="iconfont icon-shanchu"/>}
              onClick={() => Transforms.removeNodes(editor, { at: path })}
      />
    </div>
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

    const path = ReactEditor.findPath(editor as any, element);
    const selected = useSelected();
    const focused = useFocused();

    switch (e.mediaType) {
      case 'image':
        // fontSize 解决图片直接的间距
        return (
          <div style={{ fontSize: 0 }}>
            <MediaImage path={path} selected={selected} focused={focused} editor={editor} src={element.source}/>
            <span {...attributes}>{children}</span>
          </div>
        );
      case 'video':
        break;
    }
    return (
      <span {...attributes}>
        {`不支持渲染当前媒体类型: ${e.mediaType}; ${e.source}`}
        {children}
      </span>
    );
  }

}

