'use client'
import { XIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Dialog } from '~/components/ui'
import { cn } from '~/lib/utils'

export function FastCta({
  classNameIn,
  components,
}: {
  classNameIn?: { div?: string; Dialog?: { Content?: string } }
  components: {
    form: React.ReactNode
    button: React.ReactNode
  }
}) {
  return (
    <div
      className={cn(
        'flex w-full items-center justify-center py-12',
        classNameIn?.div,
      )}
    >
      <Dialog.Root>
        <Dialog.Overlay className="bg-blue-800 data-[state=closed]:animate-none data-[state=open]:animate-none" />
        <Dialog.Trigger asChild>{components.button}</Dialog.Trigger>
        <Dialog.Content
          className={cn(
            'flex flex-col gap-4 bg-white text-black',
            classNameIn?.Dialog?.Content,
          )}
        >
          <Dialog.Header className="relative w-full">
            <div className="relative">
              <Dialog.Cancel className="absolute -right-6 -top-4 bg-transparent hover:bg-transparent max-sm:-top-6">
                <div className="relative rounded-full bg-black/10 p-3 hover:bg-black/30">
                  <XIcon
                    className={
                      'absolute inset-0 left-1 top-1 size-4 stroke-black'
                    }
                  />
                </div>
              </Dialog.Cancel>
            </div>
            <Dialog.Title>Preencha o formulário abaixo</Dialog.Title>
            <Dialog.Description className="mb-2 text-zinc-700">
              Forneça o máximo de detalhes possível e lembre-se de que é
              necessário preencher todas as informações.
            </Dialog.Description>
          </Dialog.Header>
          <div className="w-full">{components.form}</div>
          <Dialog.Footer>
            <div>
              <div className="h-0.5 w-full bg-zinc-100" />
              <p
                className="mt-2 text-zinc-700"
                style={{ fontSize: '0.60rem', lineHeight: '0.75rem' }}
              >
                De acordo com as Leis 12.965/2014 e 13.709/2018, que regulam o
                uso da Internet e o tratamento de dados pessoais no Brasil, ao
                enviar o formulário autorizo Matheus Couto a enviar notificações
                por e-mail ou outros meios e concordo com sua{' '}
                <Link href={'/politica-de-privacidade'} target="_blank">
                  <span className="font-semibold">
                    Política de Privacidade.
                  </span>
                </Link>{' '}
                Observação: Alguns recursos e soluções podem variar conforme o
                plano contratado. Consulte as condições para mais detalhes.
              </p>
            </div>
          </Dialog.Footer>
        </Dialog.Content>
      </Dialog.Root>
    </div>
  )
}

// function DrawerDemo() {
//   return (
//     <Drawer.Root>
//       <Drawer.Trigger asChild>
//         <Button variant="outline">Open Drawer</Button>
//       </Drawer.Trigger>
//       <Drawer.Content>
//         <div className="mx-auto w-full max-w-sm">
//           <Drawer.Header>
//             <Drawer.Title>Move Goal</Drawer.Title>
//             <Drawer.Description>
//               Set your daily activity goal.
//             </Drawer.Description>
//           </Drawer.Header>
//           <div className="p-4 pb-0">
//             <div className="flex items-center justify-center space-x-2">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="h-8 w-8 shrink-0 rounded-full"
//               >
//                 <span className="sr-only">Decrease</span>
//               </Button>
//               <div className="flex-1 text-center">
//                 <div className="text-7xl font-bold tracking-tighter">
//                   asdasds
//                 </div>
//                 <div className="text-muted-foreground text-[0.70rem] uppercase">
//                   Calories/day
//                 </div>
//               </div>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 className="h-8 w-8 shrink-0 rounded-full"
//               >
//                 <span className="sr-only">Increase</span>
//               </Button>
//             </div>
//           </div>
//           <Drawer.Footer>
//             <Button>Submit</Button>
//             <Drawer.Close asChild>
//               <Button variant="outline">Cancel</Button>
//             </Drawer.Close>
//           </Drawer.Footer>
//         </div>
//       </Drawer.Content>
//     </Drawer.Root>
//   )
// }

// export { FastCta }
