/* This example requires Tailwind CSS v2.0+ */
const materials = [
  {
    name: 'Nerđajući čelik',
    description: 'Nerđajući čelici poseduju niz izuzetnih osobina koje ih razlikuju od ostalih klasa čelika. Kao prvo koroziono su rezistentni, zahvaljujući prvenstveno uticaju legirajućeg elementa hroma, u širokom spektru koroziono agresivnih sredina.',
    imageSrc: 'assets/landing_materials/inox.png',
    imageAlt: 'Nerdjajuci celik tekstura'
  },
  {
    name: 'Čelik',
    description: 'Neverovatan raspon i fleksibilnost osobina (uz pomoć legiranja, termičke obrade i plastične prerade) kao i relativno niska cena proizvodnje čine ga i dalje najrasprostranjenije korišćenim metalnim materijalom.',
    imageSrc: 'assets/landing_materials/celik.png',
    imageAlt: 'Celik materijal'
  },
  {
    name: 'Drvo',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    imageSrc: 'assets/landing_materials/drvo.png',
    imageAlt: 'Drvo materijal'
  },
  {
    name: 'Kamen',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    imageSrc: 'assets/landing_materials/kamen.png',
    imageAlt: 'Kamen materijal'
  }
]

export default function Materials() {
  return (
    <div className="bg-gray-100" id="materials">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center pb-6">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Materijali</h2>
          <p className="lg:text-xl sm:mt-4 text-gray-700">
            Materijali od kojih se izrađuju proizvodi su veoma bitni, ne bi li oni sami bili 
            kvalitetni i dugog životnog veka. Mi koristimo proveren materijal koji je 
            vrhunskog kvaliteta.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
          {materials.map((material) => (
            <div key={material.name} className="flex flex-col">
              <div className="flex-none">
                <img
                  src={material.imageSrc}
                  alt={material.imageAlt}
                  className="lg:w-full lg:h-40 sm:w-full object-cover object-center rounded-lg mb-4"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-800">{material.name}</h3>
                <p className="mt-2 text-gray-700">{material.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
