import { Award, FileText, Home } from "lucide-react";

export default function AboutSection() {
     const features = [
    {
      icon: Award,
      title: "Entreprise certifiée Qualibat RGE",
      description: "Ce label permet de nous démarquer par notre rigueur, notre savoir-faire et qualité de travail."
    },
    {
      icon: FileText,
      title: "Etudes et devis gratuits",
      description: "Notre politique d'entreprise est de conseiller au mieux avant de proposer d'éventuels travaux."
    },
    {
      icon: Home,
      title: "Spécialiste de l'isolation des toitures",
      description: "Notre savoir-faire : l'isolation des toitures, notamment par procédé SARKING et panneaux de fibres de bois, pour le confort d'été."
    }
  ];
 
 
 
    return (
    <section className="w-full py-16 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
          {/* Company Introduction */}
        <div className="max-w-7xl mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            L'entreprise
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            TF Couverture est une entreprise de couvreurs passionnés par leur métier, plusieurs ayant été formés chez les Compagnons du Devoir. L'entreprise est spécialisée dans la rénovation et l'isolation thermique des toitures. Nous intervenons à la fois en rénovation de toiture, ou sur des toitures neuves, des extensions ou surélévations, sur tout type de couverture : ardoises, zinc, tuiles plates, tuiles mécaniques, bac acier, shingle.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#0565C4] rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      
      </div>
    </section>
  );
}