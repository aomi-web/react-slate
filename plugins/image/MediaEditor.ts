import { BaseEditor, Node } from 'slate';
import imageExtensions from 'image-extensions/image-extensions.json';
import { Element } from 'slate/dist/interfaces/element';


export type Media = string | File | Blob;

export type MediaType = 'image' | 'video';

export type MediaNode = {
  type: 'media'
  mediaType: MediaType
  source: Media
} & Node;

export interface MediaEditor extends BaseEditor {

  /**
   * 所有图片信息
   */
  images: Array<Media>;

  /**
   * 所有图片信息
   */
  videos: Array<Media>;

  /**
   * 所有媒体信息
   */
  medias: Array<Media>;

  insertMedia: (medias: Media | Array<Media>) => void;

  isVoid: (element: MediaNode | Element) => boolean;

}

export const isImageUrl = url => {
  if (!url) {
    return false;
  }
  try {
    const ext = new URL(url).pathname.split('.').pop()?.toLocaleLowerCase();
    return imageExtensions.includes(ext);
  } catch (e) {
    console.warn(`解析URL失败: ${url}`);
    return false;
  }
};

export function getMediaType(media): MediaType | undefined {
  if (isImageUrl(media)) {
    return 'image';
  } else if (typeof media === 'string' && (media as string).startsWith('data:image')) {
    return 'image';
  }
  return undefined;
}
