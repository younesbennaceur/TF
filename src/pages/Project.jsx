import { useState } from 'react';
import { X } from 'lucide-react';
import { Link,  } from 'react-router-dom';

// Projects Data
const projectsData = [
  {
    id: 1,
    title: 'Toiture zinc moderne',
    image: '/1.jpg',
    description: 'Rénovation complète d\'une toiture en zinc avec isolation thermique performante.',
    fullDescription: 'Ce projet a consisté en la rénovation complète d\'une toiture en zinc combinée avec une isolation thermique de pointe. Les travaux ont été réalisés en respectant les délais et budget prévu.',
    location: 'Paris, Île-de-France',
  
    socialLinks: {
      instagram: 'https://www.instagram.com/tfcouverture'
    }
  },
  {
    id: 2,
    title: 'Installation toiture tuiles',
     image: '/2.jpg',
    description: 'Installation de nouvelles tuiles mécaniques avec structure de charpente renforcée.',
    fullDescription: 'Installation de tuiles mécaniques haute gamme avec renforcement de la structure de charpente. Finitions impeccables et respect des normes de construction.',
    location: 'Paris, Île-de-France',
   
    socialLinks: {
      instagram: 'https://www.instagram.com/tfcouverture',
    }
  },
  {
    id: 3,
    title: 'Belle réflection de toiture en tuiles plates',
     image: '/5.jpg',
    description: 'Belle réflection de toiture en tuiles plates à Lumigny-Nesles Ormeaux cet été. Isolation de la toiture par procédé sarking combinant fibres de bois et polyuréthane, tuiles...',
    fullDescription: 'Belle réflection de toiture en tuiles plates à Lumigny-Nesles Ormeaux. Isolation de la toiture par procédé sarking combinant fibres de bois et polyuréthane pour un confort optimal.',
    location: 'Paris, Île-de-France',
 
    socialLinks: {
      instagram: 'https://www.instagram.com/tfcouverture'
    }
  },
  {
    id: 4,
    title: 'Rénovation toiture bac acier',
     image: '/p4.jpg',
    description: 'Rénovation d\'une toiture en bac acier avec pose de fenêtre de toit.',
    fullDescription: 'Rénovation d\'une toiture en bac acier avec intégration de fenêtres de toit pour améliorer la lumière naturelle.',
   location: 'Paris, Île-de-France',
   
    socialLinks: {
      instagram: 'https://www.instagram.com/tfcouverture'
    }
  },
  {
    id: 5,
    title: 'Charpente et couverture',
     image: '/charpant.jpg',
    description: 'Reconstruction complète de charpente et nouvelle couverture.',
    fullDescription: 'Reconstruction complète de la structure de charpente selon les normes actuelles et pose d\'une nouvelle couverture de qualité premium.',
    location: 'Paris, Île-de-France',
   
    socialLinks: {
      instagram: 'https://www.instagram.com/tfcouverture',
    }
  },
  {
    id: 6,
    title: 'Démoussage et nettoyage',
     image: '/demoussage.jpg',
    description: 'Démoussage et nettoyage professionnel de toiture avec traitement hydrofuge.',
    fullDescription: 'Démoussage professionnel suivi d\'un nettoyage complet et traitement hydrofuge pour préserver la toiture.',
    location: 'Paris, Île-de-France',
   
    socialLinks: {
      instagram: 'https://www.instagram.com/tfcouverture'
    }
  }
];

export default function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="w-full  bg-white">
         {/* Hero Section */}
      <div className="relative h-72 overflow-hidden">
        <img 
           src="/7.jpg"
          alt="Qui Sommes-Nous"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0565C4]/80"></div>
        
        <div className="relative h-full flex items-center justify-center lg:mt-12 px-4">
          <div className="text-center text-white max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Projets
            </h1>
           
          </div>
        </div>
      </div>
      <div className="max-w-7xl py-16 mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0565C4] font-semibold mb-2">Découvrez notre Nos derniers projets</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Nos derniers projets
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Suivez l'avancement de nos projets sur nos réseaux sociaux Facebook et Instagram.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-12">
        
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 border-2 border-gray-300 rounded-full hover:border-[#0565C4] hover:text-[#0565C4] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
            </svg>
            <span className="hidden sm:inline font-semibold">Instagram</span>
          </a>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="relative overflow-hidden rounded-lg h-64 cursor-pointer group"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />

              {/* Overlay - Appears on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0565C4] via-blue-600/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg mb-2">
                  {project.title}
                </h3>
                <p className="text-white text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-8">
          <div className="bg-white relative rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
           <button
                onClick={() => setSelectedProject(null)}
                className=" absolute right-10 top-10 p-2 bg-white rounded-full transition-colors"
              >
                <X size={16} className="text-grey-500" />
              </button>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-80 object-cover rounded-lg mb-6"
              />

              {/* Title */}
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                {selectedProject.title}
              </h2>

              {/* Meta Info */}
              <div className="flex gap-4 text-gray-600 text-sm mb-4">
                <span> {selectedProject.location}</span>
                <span> {selectedProject.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {selectedProject.fullDescription}
              </p>

              {/* Social Links */}
              <div className="flex  gap-4">
       
          <a
            href="https://www.instagram.com/tfcouverture"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-2 border-2 border-gray-300 rounded-full hover:border-[#0565C4] hover:text-[#0565C4] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.881 1.44 1.44 0 010 2.881z" />
            </svg>
            <span className="hidden sm:inline font-semibold">Instagram</span>
          </a>
        </div>

            
            </div>
          </div>
        </div>
      )}
    </section>
  );
}