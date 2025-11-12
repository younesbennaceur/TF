import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonials Data
const testimonialsData = [
  {
    id: 1,
    text: "Très beau travail un très bon accompagnement dans la préparation de notre projet, avec des conseils avisés. Très belle réalisation. Nous ne regrettons pas notre choix",
    author: "Johny Assloy",
    avatar: "/api/placeholder/48/48",
    rating: 4.5
  },
  {
    id: 2,
    text: "Très bonne expérience. Un suivi sérieux, des échanges fluides et des conseils pertinents qui nous ont permis d’avancer sereinement dans notre projet. Le rendu final est de grande qualité. Nous referions ce choix sans hésiter.",
    author: "Sarah H",
    avatar: "/api/placeholder/48/48",
    rating: 4.5
  },
  {
    id: 3,
    text: "Nous sommes très satisfaits de l’accompagnement tout au long de notre projet. Les conseils étaient pertinents, l’approche professionnelle et le résultat final dépasse nos attentes. Excellente expérience, nous sommes ravis d’avoir fait ce choix.",
    author: "Marc D",
    avatar: "/api/placeholder/48/48",
    rating: 5
  },
  {
    id: 4,
    text: "Un accompagnement irréprochable du début à la fin. Écoute, professionnalisme et qualité étaient au rendez-vous. Le résultat est à la hauteur de nos attentes, voire au-delà. Nous recommandons sans hésitation.",
    author: "Emma L",
    avatar: "/api/placeholder/48/48",
    rating: 4
  }
];

// Star Rating Component
function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;
  
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, index) => {
        if (index < fullStars) {
          return (
            <svg key={index} className="w-6 h-6 fill-orange-400" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        } else if (index === fullStars && hasHalfStar) {
          return (
            <svg key={index} className="w-6 h-6" viewBox="0 0 24 24">
              <defs>
                <linearGradient id="half">
                  <stop offset="50%" stopColor="#fb923c" />
                  <stop offset="50%" stopColor="#d1d5db" />
                </linearGradient>
              </defs>
              <path fill="url(#half)" d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        } else {
          return (
            <svg key={index} className="w-6 h-6 fill-gray-300" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          );
        }
      })}
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-sm">
      {/* Quote Icon */}
      <div className="text-[#0565C4] text-6xl font-bold mb-6">"</div>
      
      {/* Testimonial Text */}
      <p className="text-gray-700 text-lg leading-relaxed mb-8">
        {testimonial.text}
      </p>
      
      {/* Author Info */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
         
          
          <span className="font-semibold text-gray-900">{testimonial.author}</span>
        </div>
        
        {/* Star Rating */}
        <StarRating rating={testimonial.rating} />
      </div>
    </div>
  );
}

// Main Testimonials Section
export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth >= 1024 ? 2 : 1;
  const maxIndex = Math.ceil(testimonialsData.length / itemsPerPage) - 1;

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <section className="w-full py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#0565C4] font-semibold mb-2">Section de témoignages</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
            Nos clients disent de nous
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4">
          <button
            onClick={handlePrevious}
            className="w-12 h-12 rounded-full border-2 border-[#0565C4] text-[#0565C4] hover:bg-[#0565C4] hover:text-white transition-colors flex items-center justify-center"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border-2 border-[#0565C4] text-[#0565C4] hover:bg-[#0565C4] hover:text-white transition-colors flex items-center justify-center"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}