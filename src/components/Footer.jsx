import { Facebook, Instagram, Music, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0565C4]">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo Section */}
          <div className="flex flex-col items-start">
            <img
              src="/Logo.png"
              alt="TF Couverture Logo"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-white text-sm">TF Couverture</p>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-white/90">
              <p className="hover:text-white transition-colors">
                <a href="tel:0143518724">01 43 51 87 24</a>
              </p>
              <p className="hover:text-white transition-colors">
                <a href="mailto:info@TF-Couverture.com">info@TF-Couverture.com</a>
              </p>
              <div className="space-y-1 text-sm">
                <p>1-3 rue Maryse Bastié 93600</p>
                <p>Aulnay-sous-Bois</p>
              </div>
            </div>
          </div>

          {/* Informations Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Informations</h3>
            <div className="space-y-3 text-white/90 text-sm">
              <p>SIRET : 531 014 843 00019</p>
              <div>
                <p className="font-semibold">Garantie décennale :</p>
                <p>AVIVA ASSURANCES</p>
              </div>
            </div>
          </div>

          {/* Follow Section */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="space-y-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Music size={20} />
                <span>TikTok</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <Youtube size={20} />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Copyright */}
        <div className="text-center text-white/80 text-sm space-y-2">
          <p>© 2025 by MIAGENCY. All rights reserved.</p>
          <p>Toutes les images présentes sur ce site sont libres de droit ou utilisées avec autorisation.</p>
        </div>
      </div>
    </footer>
  );
}
