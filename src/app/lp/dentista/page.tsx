import * as data from '~/modules/lp/data/dentista'

import { Metadata } from 'next'
import { tw } from '~/lib/tw'
import { TimelineSection } from '~/modules/lp/sections/TimelineSection'
import { FastCta } from './(components)/fast-cta'
import { Form } from './(components)/form'

import HeroSection from '~/modules/lp/sections/HeroSection'
import ProblemSection from '~/modules/lp/sections/ProblemSection'
import SolutionSection from '~/modules/lp/sections/SolutionSection'

import React from 'react'
import { Button } from '~/modules/lp/components/button'
import { FooterSection } from '~/modules/lp/sections'
import './page.css'

export const metadata: Metadata = {
  title: data.heroSection.top.title,
}

function Cta(props: {
  title: string
  variant?: React.ComponentPropsWithRef<typeof Button>['variant']
  classNameIn?: React.ComponentPropsWithRef<typeof FastCta>['classNameIn']
}) {
  return (
    <FastCta
      classNameIn={props.classNameIn}
      components={{
        form: <Form />,
        button: (
          <Button variant={props.variant ? props.variant : 'secondary'}>
            {props.title}
          </Button>
        ),
      }}
    />
  )
}

export default function HomePage() {
  return (
    <>
      <div className="bg-white text-black">
        {/* Esse negocio deixa a pagina diferente no mause e não da para copiar o texto */}
        <div className="pattern-dots absolute inset-0 opacity-10"></div>

        <HeroSection
          data={data.heroSection}
          classNameIn={{
            title: tw`md:w-4/5 md:text-4xl`,
          }}
          customButton={
            <Cta
              title="QUERO UM SITE PARA MEU CONSULTÓRIO"
              variant="default"
              classNameIn={{ div: tw`m-0 justify-start p-0` }}
            />
          }
        />
        <ProblemSection
          data={data.problemSection}
          className={{ section: tw`mt-12` }}
        />
        <Cta title="Quero meu site" />
        <SolutionSection data={data.soluctionSection} />
        <Cta title="Quero meu site" classNameIn={{ div: tw`bg-white` }} />
        <TimelineSection
          data={data.timelineSection}
          classNameIn={{ section: tw`bg-white` }}
        />
        <Cta
          title="Quero meu site"
          classNameIn={{ div: tw`bg-white p-0 pb-32` }}
        />
        <FooterSection />
      </div>
    </>
  )
}
