import Link from 'next/link'

const callouts = [
  {
    name: 'Klub Stolovi',
    description: 'Klubski stolovi za Vase goste',
    imageSrc: 'assets/landing_products/klub_sto.jpg',
    imageAlt: 'Klubski sto u prostoru, od metala i drveta, sa vazom i dve sofe.',
    href: '/proizvodi/klub-stolovi',
  },
  {
    name: 'Trpezarijski Stolovi',
    description: 'Trpezarisjki stolovi za Vas dom',
    imageSrc: 'assets/landing_products/trpezarijski_sto.jpg',
    imageAlt: 'Trpezarijski sto, od drveta i metala, sa visokim stolicama.',
    href: '/proizvodi/trpezarijski-sto',
  },
  {
    name: 'Industrijski Stolovi',
    description: 'Ugradite vrhunski sto u Vas poslovni prostor',
    imageSrc: 'assets/landing_products/industrijski_sto.jpg',
    imageAlt: 'Industrijski sto, od metala i drveta, unutar kancelarije.',
    href: '/proizvodi/industrijski-sto',
  },
  {
    name: 'Komode',
    description: 'Komode, spremne za Vase stvari.',
    imageSrc: 'assets/landing_products/komoda.jpg',
    imageAlt: 'Komode, od drveta i metala, u prostoriji.',
    href: '/proizvodi/komode',
  },
  {
    name: 'Stepenista',
    description: 'Vrhunsko dizajnirano stepeniste, jos boljeg kvaliteta.',
    imageSrc: 'assets/landing_products/stepeniste.jpg',
    imageAlt: 'Stepensista, od drveta i metala.',
    href: '/proizvodi/stepenista',
  },
  {
    name: 'Ostalo',
    description: 'Raznovrstan namestaj da popunite Vas prostor',
    imageSrc: 'assets/landing_products/ostalo.jpg',
    imageAlt: 'Fotelja u dnevnom boravku, napravljana od metala.',
    href: '/proizvodi/ostalo',
  },
]

export default function Products() {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto py-16 sm:py-24 lg:py-32 lg:max-w-none">
          <h2 className="text-2xl font-extrabold text-gray-900">Proizvodi</h2>

          <div className="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-6">
            {callouts.map((callout) => (
              <div key={callout.name} className="group relative">
                <div className="relative w-full h-80 bg-white rounded-lg overflow-hidden sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1">
                  <img
                    src={callout.imageSrc}
                    alt={callout.imageAlt}
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transition-opacity duration-150"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <Link href={callout.href}>
                    <a>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </Link>
                </h3>
                <p className="text-base font-semibold text-gray-900">{callout.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
