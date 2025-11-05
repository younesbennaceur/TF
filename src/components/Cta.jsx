import { Link } from "react-router-dom";
export default function CTAHeroSection() {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/back.png"
          alt="Couverture toiture"
          className="w-full h-full object-cover"
        />
        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#000000]/60"></div>
        <div className="absolute inset-0 bg-[#0565C4]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 lg:px-6 text-center">
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-6 leading-tight">
          Passez dès aujourd'hui à solutions
          <br />
          de couverture sur mesure
        </h2>

        {/* Description */}
        <p className="text-base md:text-lg lg:text-xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed">
          Faites confiance à Couvretoit France pour protéger et valoriser votre habitat grâce à des solutions
          de couverture sur mesure et un accompagnement complet, du diagnostic à la réalisation.
        </p>

        {/* CTA Button */}
        <Link  to="/devis" >
        <button className="bg-[#0565C4] hover:bg-[#045fba] text-white font-semibold text-lg px-10 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
           Demander un devis
        </button>
        </Link>
        
      </div>

      {/* Decorative Pattern Overlay (Optional) */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-blue-400/20 to-transparent"></div>
      </div>
    </section>
  );
}