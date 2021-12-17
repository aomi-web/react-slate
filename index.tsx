import React, { PropsWithChildren, ReactNode, useMemo, useState } from 'react';
import { BaseEditor, createEditor } from 'slate';
import { withHistory } from 'slate-history';
import { Editable, Slate, withReact } from 'slate-react';
import { withMedia } from './plugins/image/withMedia';
import { EditableProps } from 'slate-react/dist/components/editable';
import { renderElement } from './renderElement';
import { ElementService } from './elements/ElementService';
import { ParagraphElementService } from './elements/ParagraphElementService';
import { DEFAULT_ELEMENT_SERVICES } from './elements';
import { renderLeaf } from './renderLeaf';

export type SlateEditorProps = {
  containerStyle?: any
  plugins?: Array<any>
  renderHeader?: <T extends BaseEditor>(editor: T) => ReactNode

  /**
   * 节点渲染工具
   */
  elementServices: Array<ElementService>

  defaultRenderElement?: ElementService['render']

  editableProps?: EditableProps

  value?: Array<any>
  onChange?: (value: Array<any>) => void
}

export const DEFAULT_PLUGINS: Array<any> = [
  withMedia
];

const defaultElementService = new ParagraphElementService();

/**
 * Slate 编辑器
 * @constructor
 */
export function SlateEditor({
                              containerStyle,
                              renderHeader, elementServices, defaultRenderElement = defaultElementService.render, plugins = DEFAULT_PLUGINS,
                              editableProps,
                              value,
                              onChange,
                              children
                            }: PropsWithChildren<SlateEditorProps>) {
  const editor = useMemo(() => {
    let e = withHistory(withReact<any>(createEditor()));
    plugins.forEach(plugin => {
      e = plugin(e);
    });
    return e;
  }, []);

  const [stateValue, setValue] = useState<Array<any>>([{
    type: 'paragraph',
    children: [{ text: '' }]
  }]);

  const newValue = typeof value === 'undefined' ? stateValue : value;

  function handleValueChange(v) {
    if (typeof value === 'undefined') {
      setValue(v);
    }
    onChange?.(v);
  }

  function handleRenderElement(p) {
    return renderElement(p, editor, elementServices || DEFAULT_ELEMENT_SERVICES, defaultRenderElement);
  }

  const editableRenderElement = editableProps?.renderElement || handleRenderElement;
  const editableRenderLeaf = editableProps?.renderLeaf || renderLeaf;

  return (
    <div style={{ background: '#FFF', border: '1px solid rgba(0, 0, 0, 0.2)', overflow: 'hidden', ...containerStyle }}>
      <Slate editor={editor} value={newValue} onChange={handleValueChange}>
        {renderHeader && renderHeader(editor)}
        <Editable {...editableProps}
                  style={{ height: '100%', padding: 15, overflowY: 'scroll', ...editableProps?.style }}
                  renderElement={editableRenderElement}
                  renderLeaf={editableRenderLeaf}
        />
        {children}
      </Slate>
    </div>
  );
}
