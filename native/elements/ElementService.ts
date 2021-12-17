import { RenderElementProps } from 'slate-react/dist/components/editable';

export interface ElementService {
  /**
   * 用于判断是否支持渲染当前数据
   * @param props
   */
  support: (props) => boolean;
  /**
   * 渲染当前的数据为view
   */
  render: (props: RenderElementProps, editor) => JSX.Element;
}
