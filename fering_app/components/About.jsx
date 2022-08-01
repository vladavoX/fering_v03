/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import { HiBadgeCheck } from 'react-icons/hi'
import { FaAward } from 'react-icons/fa'
import { RiTimerFlashFill } from 'react-icons/ri'
import { GiTeamIdea } from 'react-icons/gi'

const features = [
  {
    name: 'Visokokvalitetni materijal',
    description:
      'Naši proizvodi se prave isključivo od najsavremenijeg i najkvalitetnijeg materijala. Kvaltietan materijal je sigurnost i garancija.',
    icon: HiBadgeCheck,
  },
  {
    name: 'Garantantujemo za naš proizvod',
    description:
      'Firma Fering garantuje za sve svoje proizvode, i nudi najbolje usluge na tržištu.',
    icon: FaAward,
  },
  {
    name: 'Ispunjavamo zadate rokove',
    description:
      'Nikada ne probijamo zadate rokove za izradu proizvoda. Efikasni smo i brzi u našem poslu, uz kvalitetan rad.',
    icon: RiTimerFlashFill,
  },
  {
    name: 'Otvoreni smo za Vaše ideje',
    description:
      'Otvoreni smo za sve Vaše ideje i zamisli. Takođe smo spremi da Vas posavetujemo, kako bi Vaša ideja bila još bolja.',
    icon: GiTeamIdea,
  },
]

export default function About() {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">FERING</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Zašto izabrati firmu Fering?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Firma Fering bavi se izradom najkvalitetnijeg stilskog nameštaja, portala, kućnih biblioteka,
            hotelskog i nameštaja za svačiji dom. Odlikuje nas izuzetna preduzimljivost, maštovitost i veština
            da svaku Vašu zamisao pretvorimo u visokokvalitetan proizvod.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
