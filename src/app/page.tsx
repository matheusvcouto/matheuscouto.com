import { ArrowRight } from 'lucide-react'
import { Merriweather } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

import { Button } from '@/components/ui/button'

import { cn } from '@/lib/utils'

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
                'text-balance bg-gradient-to-br from-cyan-400 to-indigo-400 bg-clip-text text-center text-5xl font-bold leading-snug text-transparent lg:text-6xl lg:leading-snug'
              )}
            >
              Transforme sua presença online
            </h1>
            <p className="max-w-2xl text-center text-lg leading-relaxed text-zinc-100 lg:text-xl lg:leading-relaxed">
              Oferecemos uma{' '}
              <strong>
                solução completa de criação e desenvolvimento de sites
              </strong>
              , focada em design moderno, integração eficiente e excelente experiência do usuário.
            </p>
          </div>

          <div className="flex flex-col-reverse items-center gap-4 sm:flex-row">
            <Button asChild size="lg" variant="link" className="text-zinc-400">
              <Link href="/about">Como trabalhamos?</Link>
            </Button>
            <Button
              asChild
              className="bg-sky-400 text-sky-950 hover:bg-sky-500 dark:bg-sky-400 dark:text-sky-950 dark:hover:bg-sky-500"
              size="lg"
            >
              <a href="https://wa.me/5598985720808?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20site." target="_blank">
                Entre em contato.
                <ArrowRight className="ml-2 size-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

    </div>
  )
}
