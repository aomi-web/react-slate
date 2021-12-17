import { ReactEditor } from 'slate-react';
import { getMediaType, isImageUrl, MediaEditor, MediaNode } from './MediaEditor';
import { Transforms } from 'slate';


const EmptyText = { text: '' };

export function withMedia<T extends ReactEditor>(editor: T): T & MediaEditor {
  const e = editor as T & MediaEditor;
  e.images = [];
  e.videos = [];
  e.medias = [];

  const { isVoid, insertData } = e;

  e.isVoid = (element) => {
    return element.media ? true : isVoid(element);
  };

  e.insertMedia = (medias) => {
    const mediaNodes: Array<MediaNode> = [];
    if (Array.isArray(medias)) {
      medias.forEach(item => mediaNodes.push({
        type: 'media',
        mediaType: (getMediaType(item) as any),
        source: item,
        children: [EmptyText]
      }));
    } else {
      mediaNodes.push({
        type: 'media',
        mediaType: (getMediaType(medias) as any),
        source: medias,
        children: [EmptyText]
      });
    }
    Transforms.insertNodes(editor, mediaNodes);
  };

  editor.insertData = data => {
    const text = data.getData('text/plain');
    const { files } = data;

    if (files && files.length > 0) {
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        const [mime] = file.type.split('/');

        if (mime === 'image') {
          reader.addEventListener('load', () => {
            const url = reader.result;
            url && e.insertMedia(url as any);
          });
          reader.readAsDataURL(file);
        }
      });
    } else if (isImageUrl(text)) {
      e.insertMedia(text);
    } else {
      insertData(data);
    }
  };

  return e;

}
