import { useParams, useNavigate } from 'react-router-dom';

// Services Data
const servicesData = {
  'toiture-tuile': {
    title: 'Toiture tuile',
    image: '/7.jpg',
    description: 'Découvrez nos services de toiture en tuile, alliant tradition et durabilité.',
    longDescription: 'Notre entreprise de couverture est spécialisée dans la rénovation de toitures et nous réalisons des travaux en neuf également. Nous effectuons tout type de travaux de couverture en tuiles, que ce soit en tuiles mécaniques (terre-cuite ou béton) ou en tuiles plates. Nous vous apporterons tous nos conseils pour vous proposer la meilleure solution adaptée à votre toiture, selon vos critères de choix esthétiques et en prenant en compte les critères de pentes minimales requises selon le type de tuile souhaité. Il est important de bien choisir le bon type de tuiles, adaptées à votre toiture.',
    benefits: [
      'Durabilité exceptionnelle',
      'Isolation thermique optimale',
      'Esthétique classique et élégante',
      'Résistance aux intempéries',
      'Entretien minimal'
    ],
    gallery: [
      '/g1.png',
      '/g2.png',
      '/g3.png',
      '/g4.png'
    ]
  },
  'toiture-zinc': {
    title: 'Toiture zinc',
    image: '/1.jpg',
    description: 'Une couverture en zinc pour un style moderne et une protection optimale.',
    longDescription: 'Le zinc est un matériau moderne et écologique pour votre toiture. Il offre une protection optimale contre les intempéries et un style contemporain à votre bâtiment. Nos experts vous conseillent sur les meilleures solutions en zinc adaptées à votre projet.',
    benefits: [
      'Style moderne et épuré',
      'Excellent rapport qualité-prix',
      'Matériau écologique',
      'Longévité exceptionnelle',
      'Facile à entretenir'
    ],
    gallery: [
      '/1.jpg',
      '/5.jpg',
      '/9.jpg',
      '/10.jpg'
    ]
  },
  'toiture-ardoise': {
    title: 'Toiture ardoise',
     image: '/3.jpg',
    description: 'L\'ardoise pour une couverture élégante et résistante dans le temps.',
    longDescription: 'L\'ardoise naturelle est un matériau premium pour les toitures haut de gamme. Elle offre une beauté naturelle incomparable et une durabilité exceptionnelle. Nos experts en ardoise vous proposent les meilleures solutions pour votre projet.',
    benefits: [
      'Matériau naturel premium',
      'Durée de vie très longue',
      'Beauté intemporelle',
      'Résistance extrême',
      'Esthétique incomparable'
    ],
    gallery: [
      '/3.jpg'
    ]
  },
  'toiture-bac-acier': {
    title: 'Toiture bac acier',
    image: '/p5.jpg',
    description: 'Une solution robuste et économique pour vos bâtiments.',
    longDescription: 'Le bac acier est une solution économique et performante pour les toitures de bâtiments commerciaux et industriels. Installation rapide et résistance exceptionnelle caractérisent ce type de couverture.',
    benefits: [
      'Prix compétitif',
      'Installation rapide',
      'Très résistant',
      'Faible entretien',
      'Idéal pour bâtiments industriels'
    ],
    gallery: [
      '/p4.jpg',
      '/p5.jpg'
    ]
  },
  'charpente': {
    title: 'Charpente',
   image: '/charpant.jpg',
    description: 'Une charpente solide est la base d\'une toiture durable et fiable.',
    longDescription: 'Une bonne charpente est essentielle pour la solidité et la durabilité de votre toiture. Nos experts vous proposent des solutions adaptées à votre projet, en respectant les normes de construction en vigueur.',
    benefits: [
      'Structure solide et durable',
      'Expertise reconnue',
      'Conformité aux normes',
      'Nombreuses configurations',
      'Garantie de qualité'
    ],
    gallery: [
      '/charpant.jpg',
      '/charpant2.jpg',
      
    ]
  },
  'isolation': {
    title: 'Isolation',
     image: '/Isolation.jpg',
    description: 'L\'isolation des toitures pour améliorer votre confort thermique.',
    longDescription: 'Une bonne isolation thermique permet de réduire vos factures énergétiques et d\'améliorer votre confort. Nous proposons des solutions d\'isolation performantes incluant la méthode SARKING et les panneaux de fibres de bois.',
    benefits: [
      'Réduction énergétique',
      'Confort thermique amélioré',
      'Économies durables',
      'Respect environnemental',
      'Solutions modernes'
    ],
    gallery: [
     '/Isolation.jpg'
    ]
  },
  'fenetre-toit': {
    title: 'Fenêtre de toit',
     image: '/4.jpg',
    description: 'Laissez entrer la lumière naturelle avec nos fenêtres de toit.',
    longDescription: 'Les fenêtres de toit apportent lumière naturelle et esthétique à vos combles. Découvrez nos solutions de fenêtres de toit performantes et bien intégrées à votre toiture.',
    benefits: [
      'Apport de lumière naturelle',
      'Esthétique améliorée',
      'Ventilation naturelle',
      'Divers styles disponibles',
      'Installation professionnelle'
    ],
    gallery: [
      '/4.jpg',
      '/6.jpg'
    ]
  },
  'demoussage': {
    title: 'Démoussage',
     image: '/demoussage.jpg',
    description: 'Nettoyage et démoussage pour prolonger la vie de votre toiture.',
    longDescription: 'Le démoussage régulier de votre toiture prolonge sa durée de vie et préserve son esthétique. Nos experts en nettoyage proposent des solutions efficaces et respectueuses de votre couverture.',
    benefits: [
      'Prolonge la durée de vie',
      'Préserve l\'esthétique',
      'Prévient les dégâts',
      'Service professionnel',
      'Tarifs avantageux'
    ],
    gallery: [
    '/demoussage.jpg',

    ]
  }
};

export default function ServiceDetailPage() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const service = servicesData[serviceId];

  if (!service) {
    return (
      <div className="w-full h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Service non trouvé</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-[#0565C4]  hover:bg-[#0459af]  text-white px-6 py-2 rounded-md font-semibold transition-colors"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <section className="w-full pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Hero Image */}
        <div className="mb-12 rounded-lg overflow-hidden h-96">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Title */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600">
                {service.description}
              </p>
            </div>

            {/* Long Description */}
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                À propos de ce service
              </h2>
              <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
                {service.longDescription}
              </p>
            </div>

            {/* Gallery */}
            {service.gallery && service.gallery.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Galerie
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {service.gallery.map((image, index) => (
                    <div
                      key={index}
                      className="relative overflow-hidden rounded-lg h-48"
                    >
                      <img
                        src={image}
                        alt={`${service.title} - ${index + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Benefits Card */}
            <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Avantages
              </h3>
              <ul className="space-y-3">
                {service.benefits?.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-[#0565C4]flex-shrink-0 mt-0.5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-600 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={() => navigate('/devis')}
                className="w-full mt-8 bg-[#0565C4]  hover:bg-[#0459af]  text-white px-6 py-3 rounded-md font-semibold transition-colors"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
}