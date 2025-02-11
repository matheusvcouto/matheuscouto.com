import Link from 'next/link'
import React from 'react'

interface FooterSectionProps {
  classNameIs?: {}
}

export const FooterSection: React.FC<FooterSectionProps> = (props) => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="flex w-full flex-col justify-center gap-4 p-4 text-xs">
        <div className="flex items-center justify-center">
          <div className="flex w-full max-w-screen-lg items-center justify-between">
            {' '}
            <span>
              © {new Date().getFullYear()}{' '}
              <Link href={'/'} target="_blank">
                matheuscouto.com
              </Link>{' '}
              All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center font-medium">
              <li>
                <Link
                  href="/politica-de-privacidade"
                  target="_blank"
                  className="hover:underline"
                >
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <p
            className="text-wrap text-center font-light text-zinc-300 md:w-3/5"
            style={{ fontSize: '0.60rem', lineHeight: '0.75rem' }}
          >
            Alguns recursos e soluções podem variar conforme o plano contratado
            e podem estar sujeitos a custos adicionais. Consulte as condições
            para mais detalhes. De acordo com as Leis 12.965/2014 e 13.709/2018,
            que regulam o uso da Internet e o tratamento de dados pessoais no
            Brasil, ao enviar o formulário autorizo Matheus Couto a enviar
            notificações por e-mail ou outros meios e concordo com sua{' '}
            <Link href={'/politica-de-privacidade'} target="_blank">
              <span className="font-semibold">Política de Privacidade.</span>
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
