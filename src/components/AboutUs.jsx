export default function AboutSection() {
  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        <div className=" flex  gap-8 lg:gap-12 items-center">
          {/* Left Side - Image */}
          <div className="hidden  relative lg:block">
            <img
              src="/side.png"
              alt="Entreprise AMC IDF"
              className="    rounded-lg object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6">
            {/* Title */}
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              L'entreprise AMC IDF
            </h2>

            {/* Main Description */}
            <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
              AMC IDF est une entreprise de couvreurs passionnés par leur métier, plusieurs ayant été formés chez les Compagnons du Devoir. L'entreprise est spécialisée dans la rénovation et l'isolation thermique des toitures. Nous intervenons à la fois en rénovation de toiture, ou sur des toitures neuves, des extensions ou surélevations, sur tout type de couverture : ardoises, zinc, tuiles plates, tuiles mécaniques, bac acier, shingle.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
              {/* Feature 1 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className=" h-16 w-16">
                     <img className="h-16 w-16" src="./1.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Entreprise certifiée Qualibat RGE
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 mt-1">
                      Ce label permet de nous démarquer par notre rigueur, notre savoir-faire et qualité de travail.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="">
                    <img className="h-16 w-16" src="./2.svg" alt="" />
                    
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Études et devis gratuits
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 mt-1">
                      Notre politique d'entreprise est de conseiller au mieux avant de proposer d'éventuels travaux.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="space-y-3 md:col-span-2">
                <div className="flex items-start gap-3">
                  <div className="">
                     <img className="h-12 w-12" src="./3.svg" alt="" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Spécialiste de l'isolation des toitures
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600 mt-1">
                      Notre savoir-faire : l'isolation des toitures, notamment par procédé SARKING et panneaux de fibres de bois, pour le confort d'été.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image - Shows on small screens */}
          <div className="lg:hidden w-full">
            <img
              src="/side.png"
              alt="Entreprise AMC IDF"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}