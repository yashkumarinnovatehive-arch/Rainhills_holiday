import { useState, useEffect } from 'react';
import { FaPhone, FaBars, FaTimes } from 'react-icons/fa';
import { property } from '../data/propertyData';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Rooms', href: '#rooms' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Experience', href: '#experience' },
    { name: 'Location', href: '#location' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-forest-950/90 backdrop-blur-md shadow-lg py-4'
            : 'bg-gradient-to-b from-forest-950/80 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          
          {/* Logo */}
          <a href="#home" className="flex flex-col group">
            <span className="font-serif text-2xl md:text-3xl tracking-[0.2em] text-cream-50 font-medium leading-none group-hover:text-accent-gold transition-colors">
              RAINHILLS
            </span>
            <span className="font-sans text-[9px] md:text-[10px] tracking-[0.4em] text-accent-gold uppercase mt-1">
              Holiday Home
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[13px] tracking-widest text-cream-100 hover:text-accent-gold transition-colors duration-300 uppercase relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-accent-gold after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
            
            <a
              href="#booking"
              className="flex items-center space-x-2 bg-accent-gold hover:bg-accent-gold-hover text-forest-950 font-sans text-xs font-bold tracking-widest uppercase py-3 px-6 rounded-sm shadow-md transition-all duration-300 hover:translate-y-[-2px]"
            >
              <FaPhone size={12} />
              <span>Book Now</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-cream-50 hover:text-accent-gold transition-colors duration-300 focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-forest-950/98 backdrop-blur-xl z-50 flex flex-col justify-center items-center px-6 transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-6 right-6 text-cream-50 hover:text-accent-gold transition-colors duration-300"
        >
          <FaTimes size={28} />
        </button>

        <div className="flex flex-col space-y-6 text-center w-full max-w-xs">
          <span className="font-serif text-3xl tracking-[0.2em] text-accent-gold font-medium mb-4">
            RAINHILLS
          </span>
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-sans text-lg tracking-widest text-cream-100 hover:text-accent-gold transition-colors duration-300 uppercase py-2"
            >
              {link.name}
            </a>
          ))}
          
          <a
            href="#booking"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center space-x-2 bg-accent-gold hover:bg-accent-gold-hover text-forest-950 font-sans text-sm font-bold tracking-widest uppercase mt-4 py-4 px-8 rounded-sm shadow-lg transition-all duration-300"
          >
            <FaPhone size={14} />
            <span>Book Now</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
