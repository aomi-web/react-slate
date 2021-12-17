import { ElementService } from './elements/ElementService';

/**
 * 节点渲染
 * @param props
 * @param editor 当前editor
 * @param elementServices 节点服务
 * @param defaultRenderElement 默认的渲染服务
 */
export function renderElement(props, editor, elementServices: Array<ElementService>, defaultRenderElement: ElementService['render']) {
  const service = elementServices.find(item => item.support(props));
  if (null == service) {
    console.log('[warn]找不到符合的节点渲染服务,使用默认渲染');
    return defaultRenderElement(props, editor);
  }
  return service.render(props, editor);
}
