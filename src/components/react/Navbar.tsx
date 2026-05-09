import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'O Método', href: '#metodo' },
    { name: 'Para Quem É', href: '#para-quem' },
    { name: 'O Autor', href: '#sobre' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-out hidden md:flex items-center justify-between px-6 py-3 rounded-full ${
          scrolled ? 'glass-panel w-[90%] max-w-5xl' : 'w-full max-w-6xl bg-transparent'
        }`}
      >
        <div className="text-xl font-serif font-bold tracking-wide text-[#F8F5F0]">
          AUTO<span className="text-[#D4AF37]">INVESTIGAÇÃO</span>
        </div>
        
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-6 text-sm font-medium opacity-80">
            {links.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-[#D4AF37] transition-colors">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#oferta"
            className="bg-[#D4AF37] text-[#12100E] px-6 py-2.5 rounded-full font-bold text-sm hover:bg-[#F2C94C] transition-all hover:-translate-y-0.5 shadow-lg shadow-[#D4AF37]/20"
          >
            Quero Acessar
          </a>
        </div>
      </nav>

      {/* Mobile Navbar Header */}
      <div className={`md:hidden fixed top-0 left-0 w-full z-50 p-4 flex items-center justify-between transition-all duration-300 ${scrolled ? 'glass-panel !rounded-none !border-x-0 !border-t-0' : 'bg-transparent'}`}>
         <div className="text-xl font-serif font-bold tracking-wide text-[#F8F5F0]">
          AUTO<span className="text-[#D4AF37]">INVESTIGAÇÃO</span>
        </div>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="text-[#F8F5F0]"
          aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-[#12100E]/95 backdrop-blur-xl pt-24 px-6 flex flex-col gap-8">
           <ul className="flex flex-col gap-6 text-xl font-serif">
            {links.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className="block hover:text-[#D4AF37] transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

    </>
  );
};

export default Navbar;
