import { ReactEditor } from 'slate-react';
import { getMediaType, isImageUrl, MediaEditor, MediaNode, MediaType } from './MediaEditor';
import { Transforms } from 'slate';


const EmptyText = { text: '' };

function getMedia(editor, media): MediaNode {
  const mediaType: MediaType = (getMediaType(media) as MediaType);
  if (mediaType === 'image') {
    editor.images.push(media);
  } else if (mediaType === 'video') {
    editor.videos.push(media);
  }
  editor.medias.push(media);
  return {
    type: 'media',
    mediaType,
    source: media,
    children: [EmptyText]
  };
}

export function withMedia<T extends ReactEditor>(editor: T): T & MediaEditor {
  const e = editor as T & MediaEditor;
  e.images = e.images || [];
  e.videos = e.videos || [];
  e.medias = e.medias || [];

  const { isVoid, insertData } = e;

  e.isVoid = (element) => {
    return element.media ? true : isVoid(element);
  };

  e.insertMedia = (medias) => {
    const mediaNodes: Array<MediaNode> = [];
    if (Array.isArray(medias)) {
      medias.forEach(item => {
        mediaNodes.push(getMedia(e, item));
      });
    } else {
      mediaNodes.push(getMedia(e, medias));
    }
    Transforms.insertNodes(editor, mediaNodes);
  };

  editor.insertData = data => {
    const text = data.getData('text/plain');
    if (text) {
      insertData(data);
      return;
    }
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
