import { ArrowLeft, ArrowRight } from 'lucide-react'
import { SimpleButton } from '~/components/ui/SimpleButton'
import { tw } from '~/lib/tw'
// import { SimpleButton } from "./(components)/SimpleButton";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center overflow-hidden bg-zinc-950">
      <div className="mx-auto w-full max-w-[800px] px-6 py-20 max-md:py-12">
        <div className="flex flex-col gap-8">
          <div className="mx-auto w-full md:px-12">
            <div className="-mx-8 flex items-center gap-4">
              <SimpleButton
                text="back to homepage"
                to="/"
                icon={{
                  Icon: ArrowLeft,
                  position: 'left',
                  clasName: tw`rounded-full transition-all duration-150 group-hover:bg-white group-hover:stroke-black`,
                }}
              />
            </div>
          </div>

          {/* <div className="mx-auto w-full">
            <Image
              src={LOGO}
              alt="Logo"
              className="size-8"
              width={32}
              height={32}
            />
          </div> */}

          <div className="prose prose-invert mx-auto w-full prose-a:text-blue-400 hover:prose-a:text-blue-500">
            {children}
          </div>

          <div className="mx-auto w-full md:px-12">
            <div className="-mx-8 flex items-center justify-between gap-4">
              <SimpleButton
                text="back to homepage"
                to="/"
                icon={{
                  Icon: ArrowLeft,
                  position: 'left',
                  clasName: tw`rounded-full transition-all duration-150 group-hover:bg-white group-hover:stroke-black`,
                }}
              />
              <SimpleButton
                text="Entrar em contato"
                to="https://wa.me/5598985720808?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20site."
                icon={{
                  Icon: ArrowRight,
                  position: 'right',
                  clasName: tw`rounded-full transition-all duration-150 group-hover:bg-white group-hover:stroke-black`,
                }}
                className="max-md:text-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
