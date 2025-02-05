import { ArrowRight } from 'lucide-react'
import { Icon } from '~/components/icons'
import { Button } from '~/components/ui/button'

import { SimpleButton } from '~/components/ui/SimpleButton'

import { cn } from '~/lib/utils'

export default function Homepage() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-zinc-950">
      <div className="z-20 mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col items-center gap-16">
          {/* <Image
            src={LOGO}
            alt="Logo"
            className="size-10"
            width={40}
            height={40}
          /> */}

          <div className="flex flex-col items-center gap-4">
            <h1
              className={cn(
                'text-balance bg-gradient-to-br from-cyan-400 to-indigo-400 bg-clip-text text-center text-5xl font-bold leading-snug text-transparent lg:text-6xl lg:leading-snug',
              )}
            >
              Transforme sua presença online
            </h1>
            <p className="max-w-2xl text-center text-lg leading-relaxed text-zinc-100 lg:text-xl lg:leading-relaxed">
              Oferecemos uma{' '}
              <strong>
                solução completa de criação e desenvolvimento de sites
              </strong>
              , focada em design moderno, integração eficiente e excelente
              experiência do usuário.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center gap-4 sm:flex-row">
            {/* <Button asChild size="lg" variant="link" className="text-zinc-400">
              <Link href="/about">Como trabalhamos?</Link>
            </Button> */}
            <SimpleButton
              to="/about"
              text="Como trabalhamos?"
              className="translate-x-4 duration-300 hover:translate-x-0"
              icon={{
                Icon: ArrowRight,
                position: 'right',
                size: 'lg',
                clasName: cn(
                  'rounded-full transition-all duration-500 group-hover:bg-white group-hover:stroke-black',
                  '!-translate-x-6 rotate-12 opacity-0',
                  'group-hover:!translate-x-0 group-hover:-rotate-45 group-hover:opacity-100',
                ),
              }}
            />

            <Button
              asChild
              className="bg-white text-black transition-all duration-300 hover:scale-95 hover:bg-opacity-85"
              size="default"
            >
              <a
                href="https://wa.me/5598985720808?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20site."
                target="_blank"
              >
                <Icon.WhatsApp className="mr-1 size-5" />
                Entre em contato.
              </a>
            </Button>

            {/* <button className="inline-flex h-12 text-sm animate-shimmer items-center justify-center rounded-full border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 focus:ring-offset-slate-600">
              <a
                className="flex gap-2 items-center justify-center"
                href="https://wa.me/5598985720808?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20site."
                target="_blank"
              >
                Entre em contato.
                <ArrowRight className="size-4" />
              </a>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}
