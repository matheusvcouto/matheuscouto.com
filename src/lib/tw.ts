// no vscode tem que adicionar
// "tailwindCSS.experimental.classRegex": [
//   ["cn\\(([^)]*)\\)", "'([^']*)'"],
//   // ["tw\\(([^)]*)\\)", "'([^']*)'"]
//   ["tw`([^`]*)", ""]
// ]

import { type ClassValue } from 'clsx'

export function tw(
  strings: TemplateStringsArray,
  ...values: ClassValue[]
): string {
  return strings.reduce(
    (result, str, i) => result + str + (values[i] ?? ''),
    '',
  )
}
