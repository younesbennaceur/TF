import { useNavigate } from 'react-router-dom';

// Services Data
const servicesData = [
  {
    id: 'toiture-tuile',
    title: 'Toiture tuile',
    image: '/s1.png',
    description: 'Découvrez nos services de toiture en tuile, alliant tradition et durabilité.'
  },
  {
    id: 'toiture-zinc',
    title: 'Toiture zinc',
    image: '/s2.png',
    description: 'Une couverture en zinc pour un style moderne et une protection optimale.'
  },
  {
    id: 'toiture-ardoise',
    title: 'Toiture ardoise',
    image: '/s3.png',
    description: 'L\'ardoise pour une couverture élégante et résistante dans le temps.'
  },
  {
    id: 'toiture-bac-acier',
    title: 'Toiture bac acier',
    image: '/s4.png',
    description: 'Une solution robuste et économique pour vos bâtiments.'
  },
  {
    id: 'charpente',
    title: 'Charpente',
    image: '/s5.png',
    description: 'Une charpente solide est la base d\'une toiture durable et fiable.'
  },
  {
    id: 'isolation',
    title: 'Isolation',
    image: '/s6.png',
    description: 'L\'isolation des toitures pour améliorer votre confort thermique.'
  },
  {
    id: 'fenetre-toit',
    title: 'Fenêtre de toit',
    image: '/s7.png',
    description: 'Laissez entrer la lumière naturelle avec nos fenêtres de toit.'
  },
  {
    id: 'demoussage',
    title: 'Démoussage',
    image: '/s8.png',
    description: 'Nettoyage et démoussage pour prolonger la vie de votre toiture.'
  }
];

// Services Grid Component
export default function ServicesSection() {
  const navigate = useNavigate();

  const handleCardClick = (serviceId) => {
    navigate(`/services/${serviceId}`);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0565C4]  font-semibold mb-2">Découvrez notre savoir-faire</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Notre savoir-faire
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>

        {/* Services Grid */}
        <div className=" mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service) => (
            <div
              key={service.id}
              onClick={() => handleCardClick(service.id)}
              className="cursor-pointer group"
            >
              {/* Card Image */}
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-[#0565C4] hover:bg-[#045fba]  text-white px-6 py-2 rounded-md font-semibold transition-colors">
                    Découvrir
                  </button>
                </div>
              </div>

              {/* Card Link */}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleCardClick(service.id);
                }}
                className="text-[#0565C4] hover:text-[#045fba] font-semibold text-sm mb-3 flex items-center gap-2 group"
              >
                En savoir plus »
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>

              {/* Card Title */}
              <h3 className="text-gray-900 font-medium text-base underline">
                {service.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}