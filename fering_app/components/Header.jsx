export default function Example() {
  return (
    <div className="relative bg-white overflow-hidden h-screen" id="pocetna">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:h-screen pt-8 sm:pt-16 md:pt-20 lg:pt-28 mt-10">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Najbolji izbor za izradu</span>{' '}
                <span className="block text-indigo-600 xl:inline">metalnih proizvoda</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Bilo da su u pitanju stepeništa, nameštaj, konstrukcija ili nešto drugo, za Vaše dvorište, kuću,
                halu i sl. Željeni proizvod, vredan Vašeg prostora, mora biti vrhnuskog kvaliteta i dizajna,
                kreiran od strane radnika sa višedecenijskim iskustvom.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="/assets/banner.png"
          alt="Slika varioca kako vari"
        />
      </div>
    </div>
  )
}
