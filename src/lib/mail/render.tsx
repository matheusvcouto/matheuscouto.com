import { render } from '@react-email/components'
import { ReactElement } from 'react'

/**
 * Função genérica que renderiza um componente React para HTML.
 * - `T` é inferido automaticamente com base nas props do componente.
 * - Retorna uma string HTML.
 */
export async function renderToHtml<T extends object>(
  Component: (props: T) => ReactElement,
  props: T,
): Promise<string> {
  // const html = renderToStaticMarkup(<Component {...props} />)
  // return `<!DOCTYPE html>${html}`

  const html = render(<Component {...props} />)
  return html
}
