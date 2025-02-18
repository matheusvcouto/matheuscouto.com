import * as LucideIcons from 'lucide-react'
import { ComponentProps, ElementType, FC } from 'react'

type LucideIconName = keyof typeof LucideIcons

// interface LucideIconProps extends SVGProps<SVGSVGElement> {
//   icon: LucideIconName
// }

interface LucideIconProps extends ComponentProps<'svg'> {
  icon: LucideIconName
}

export const LucideIcon: FC<LucideIconProps> = ({ icon, ...rest }) => {
  // Forçamos o cast para React.ElementType para que o JSX aceite.
  const IconComponent = LucideIcons[icon] as ElementType

  if (!IconComponent) return null

  return <IconComponent {...rest} />
}
