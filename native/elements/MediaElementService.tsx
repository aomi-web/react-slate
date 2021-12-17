import React from 'react';
import { Image, ImageProps, Text, View } from 'react-native';
import { ReactEditor, useFocused, useSelected } from 'slate-react';
import { Path } from 'slate';
import { MediaEditor, MediaNode } from '../../plugins/image/MediaEditor';
import { ElementService } from '../../elements/ElementService';

export type MediaImageProps = {
  editor: MediaEditor
  path: Path
  selected: boolean
  focused: boolean
} & ImageProps

export function MediaImage({ path, selected, focused, editor, ...props }: MediaImageProps) {
  return (
    <View style={{ position: 'relative' }} contentEditable={false}>
      <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} {...props}/>
    </View>
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
          <View {...attributes}>
            {children}
            <MediaImage path={path} selected={selected} focused={focused} editor={editor} src={element.source}/>
          </View>
        );
      case 'video':
        break;
    }
    return (
      <Text {...attributes}>{`不支持渲染当前媒体类型: ${e.mediaType}; ${e.source}`}</Text>
    );
  }

}

