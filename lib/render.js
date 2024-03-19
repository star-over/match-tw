// https://github.com/peterszarvas94/next-htmx/blob/main/utils/render.ts

export async function renderAsync(asyncComponent) {
  const component = await asyncComponent;
  const ReactDOMServer = (await import('react-dom/server')).default;
  const html = ReactDOMServer.renderToString(component);
  return html;
}

export async function render(component) {
  const ReactDOMServer = (await import('react-dom/server')).default;
  const html = ReactDOMServer.renderToString(component);
  return html;
}
