import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profileOptions = [
    { label: 'Toiture ardoise', href: '/services/toiture-ardoise' },
    { label: 'Toiture bac acier', href: '/services/toiture-bac-acier' },
    { label: 'Charpente', href: '/services/charpente' },
    { label: 'Isolation', href: '/services/isolation' },
    { label: 'Fenêtre de toit', href: '/services/fenetre-toit' },
    { label: 'Démoussage', href: '/services/demoussage' }
  ];

  return (
    <nav
      className="fixed top-5 w-full z-50 px-6 md:px-12 transition-all duration-300  "
    >
      <div className=" bg-white border border-gray-100 shadow-sm rounded-2xl mx-auto px-4 lg:px-6 h-16 lg:h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/Logo.png"
            alt="logo"
            className="h-18"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-900 transition-colors">
            Accueil
          </Link>
          <Link to="/entreprise" className="hover:text-blue-900 transition-colors">
            L’entreprise
          </Link>

          {/* Desktop Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-blue-900 transition-colors">
              <span>Savoir-faire</span>
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute left-0 mt-0 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              {profileOptions.map((option) => (
                <Link
                  key={option.label}
                  to={option.href}
                  className="block px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-900 first:rounded-t-md last:rounded-b-md transition-colors"
                >
                  {option.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/projets" className="hover:text-blue-900 transition-colors">
            Projets
          </Link>
          <Link to="/contact" className="hover:text-blue-900 transition-colors">
            Contact
          </Link>
        </div>
        <div className='flex gap-2'>
           <a to="/contact" className="hidden lg:block items-center text-[#0565C4] hover:text-[#045fba]  px-6 py-2 rounded-md font-medium transition-colors">
          
          <Phone size={16} className="inline-block mr-2" />
          <span>06.52.69.32.93</span> 
        </a>
        <Link to="/devis" className="hidden lg:block bg-[#0565C4] hover:bg-[#045fba] text-white px-6 py-2 rounded-md font-medium transition-colors">
          Demander un devis
        </Link>


        </div>

        {/* Desktop Contact Button */}
        

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 hover:bg-gray-100 rounded-md"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden rounded-2xl bg-white border-t border-gray-200">
          <div className="px-4 py-4 space-y-3">
            <Link
              to="/"
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/entreprise"
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              L’entreprise
            </Link>

            {/* Mobile Dropdown */}
            <div>
              <button
                onClick={() => setOpenDropdown(!openDropdown)}
                className="w-full flex items-center justify-between py-2 text-gray-700 hover:text-blue-900 font-medium"
              >
                Savoir-faire
                <ChevronDown
                  size={18}
                  className={`transition-transform ${
                    openDropdown ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openDropdown && (
                <div className="pl-4 space-y-2 mt-2">
                  {profileOptions.map((option) => (
                    <Link
                      key={option.label}
                      to={option.href}
                      className="block py-2 text-gray-600 hover:text-blue-900 transition-colors"
                      onClick={() => {
                        setIsOpen(false);
                        setOpenDropdown(false);
                      }}
                    >
                      {option.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/projets"
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
               Projets
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-gray-700 hover:text-blue-900 font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>

            <Link
              to="/devis"
              onClick={() => setIsOpen(false)}
              className="w-full block text-center bg-[#0565C4] hover:bg-[#045fba] text-white py-2 rounded-md font-medium mt-4 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}