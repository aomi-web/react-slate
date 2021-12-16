import { BaseEditor } from 'slate';

export interface ImageEditor extends BaseEditor {
  insertImage: (img: string | File | Blob) => void;
}
