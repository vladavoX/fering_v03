/* This example requires Tailwind CSS v2.0+ */
const materials = [
  {
    name: 'INOX',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
    imageSrc: 'assets/landing_materials/inox.png',
    imageAlt: 'INOX materijal'
  },
  {
    name: 'Celik',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
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
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">Materijali</h2>
            <p className="lg:text-2xl sm:mt-4 text-gray-700">
              The walnut wood card tray is precision milled to perfectly fit a stack of Focus cards. The powder coated
              steel divider separates active cards from new ones, or can be used to archive important task lists.
            </p>
          </div>
          <div>
            
          </div>
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
