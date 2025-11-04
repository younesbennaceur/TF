import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Suppliers Data
const suppliersData = [
  {
    id: 1,
    name: 'UNILIN',
    logo: '/api/placeholder/200/80'
  },
  {
    id: 2,
    name: 'ISONAT',
    logo: '/api/placeholder/200/80'
  },
  {
    id: 3,
    name: 'ISOVER',
    logo: '/api/placeholder/200/80'
  },
  {
    id: 4,
    name: 'PLACO',
    logo: '/api/placeholder/200/80'
  },
  {
    id: 5,
    name: 'VELUX',
    logo: '/api/placeholder/200/80'
  },
  {
    id: 6,
    name: 'ROCKWOOL',
    logo: '/api/placeholder/200/80'
  }
];

export default function SuppliersSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Determine items per page based on screen size
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 4;
      if (window.innerWidth >= 768) return 3;
      return 2;
    }
    return 4;
  };
  
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  
  // Update items per page on window resize
  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setItemsPerPage(getItemsPerPage());
    });
  }
  
  const maxIndex = Math.max(0, Math.ceil(suppliersData.length / itemsPerPage) - 1);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleSuppliers = suppliersData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="w-full py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#0565C4] font-semibold mb-2">Section de Nos fournisseurs</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Nos fournisseurs qui nous font confiance
          </h2>
        </div>

        {/* Suppliers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {visibleSuppliers.map((supplier) => (
            <div
              key={supplier.id}
              className="flex items-center justify-center p-6 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
            >
              <img
                src={supplier.logo}
                alt={`Logo ${supplier.name}`}
                className="max-w-full h-auto opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border-2 border-[#0565C4] text-[#0565C4] hover:bg-[#0565C4] hover:text-white transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Fournisseurs précédents"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-[#0565C4] text-[#0565C4] hover:bg-[#0565C4] hover:text-white transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Fournisseurs suivants"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}