import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Html,
  Tailwind,
  Text,
} from '@react-email/components'
import { tw } from '~/lib/tw'
import { cn } from '~/lib/utils'

interface Btn {
  text: string
  href: string
  classname?: string
}

interface DynamicFormResponseEmailProps {
  fields: Record<string, string>
  buttons?: Btn[]
}

export function DynamicFormResponseEmail({
  fields,
  buttons,
}: DynamicFormResponseEmailProps) {
  return (
    <Html lang="pt" className="m-0 p-0">
      <Head>
        <Font
          fontFamily="Roboto"
          fallbackFontFamily="Arial"
          webFont={{
            url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;300;400;500;600700&display=swap',
            format: 'woff2',
          }}
          // fontWeight={400}
          // fontStyle="normal"
        />
      </Head>
      <Tailwind>
        <Body className="bg-white">
          <Container
            className="mx-auto max-w-lg rounded-lg bg-white p-6"
            // style={{ border: '1.5px solid rgb(212 212 216 / 1) ' }}
          >
            <Text className="!-mt-0.5 text-center text-2xl font-bold text-blue-600">
              Confirmação de Envio de Formulário
            </Text>
            <Text className="!-mt-2 !pb-2 text-center text-base font-normal text-gray-700">
              Olá Matheus, recebemos os seguintes dados:
            </Text>
            <Container className="mx-auto w-full">
              {Object.entries(fields).map(([key, value], index) => (
                <Container
                  key={key}
                  className={cn(
                    'flex flex-col bg-zinc-100 px-4',
                    index % 2 === 0 && 'bg-zinc-200',
                    index === 0 && 'rounded-t-lg',
                    index + 1 === Object.entries(fields).length &&
                      'rounded-b-lg',
                  )}
                >
                  <Container className="flex flex-col">
                    <Text className="font-semibold text-zinc-800">{key}:</Text>
                    <Text className="text-zinc-600">{value}</Text>
                  </Container>
                </Container>
              ))}
              {buttons && buttons.length > 0 && (
                <Container className="mt-4">
                  {buttons.map((btn, i) => (
                    <Button
                      href={btn.href}
                      key={i}
                      className={cn(
                        'rounded-md bg-blue-500 px-4 py-2 text-white',
                        btn.classname,
                      )}
                    >
                      {btn.text}
                    </Button>
                  ))}
                </Container>
              )}
            </Container>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

// Propriedades para preview (para facilitar a visualização durante o desenvolvimento)
DynamicFormResponseEmail.PreviewProps = {
  fields: {
    Nome: 'João Silva',
    Email: 'joao.silva@example.com',
    Telefone: '11987654321',
    Assunto: 'Dúvida sobre o serviço',
    Mensagem: 'Olá, gostaria de saber mais sobre os planos disponíveis.',
    Resposta: 'Entraremos em contato em breve.',
  },
  buttons: [
    {
      href: 'https://google.com',
      text: 'Abrir',
    },
    {
      href: 'https://google.com',
      text: 'Abrir',
      classname: tw`bg-green-500`,
    },
  ],
} as DynamicFormResponseEmailProps

export default DynamicFormResponseEmail
