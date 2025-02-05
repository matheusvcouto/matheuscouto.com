import type * as CSS from 'csstype'

export const css = (css: CSS.Properties) =>
  Object.entries(css)
    .map(([key, value]) => `${key}: ${value}`)
    .join(';')
