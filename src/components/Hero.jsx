import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen flex items-center justify-start overflow-hidden pt-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute b  inset-0 w-full h-full object-cover"
      >
        <source src="/bg.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/30"></div>

      {/* White Gradient Overlay (bottom to top) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent  to-white opacity-100"></div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex items-center pl-8 lg:pl-16 max-w-7xl">
        <div className="max-w-5xl">
          {/* Main Heading */}
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Couvreur-zingueur, la passion dans notre métier
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-white mb-8 leading-relaxed max-w-4xl">
            Parce que chacun peut contribuer à un avenir plus propre, nous vous accompagnons avec des solutions pensées pour votre quotidien.
          </p>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="inline-block bg-[#0565C4] hover:bg-[#045fba] text-white px-8 py-3 rounded-md font-semibold text-lg transition-colors duration-300"
          >
            Demander un devis
          </Link>
        </div>
      </div>
    </section>
  );
}